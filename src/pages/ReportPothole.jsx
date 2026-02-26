import React, { useState } from "react";
import { db } from "../firebaseClient";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function ReportPothole() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [coords, setCoords] = useState(null);
  const [severity, setSeverity] = useState("Low");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 📍 Get GPS
  const getLocation = () => {
    setMessage("📍 Getting location...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setMessage("✅ Location captured");
      },
      () => setMessage("❌ Location denied")
    );
  };

  // 🖼 File select
  const handleFile = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  // 🚀 Submit
  const submitReport = async () => {
    if (!file || !coords) {
      return setMessage("❌ Upload image & capture location");
    }

    setLoading(true);
    setMessage("Uploading image...");

    try {
      // 1️⃣ Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "road_rever_upload"); // your unsigned preset

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dz9qorte4/image/upload", // <-- replace YOUR_CLOUD_NAME
        { method: "POST", body: formData }
      );

      const data = await res.json();
      if (!data.secure_url) {
        setLoading(false);
        return setMessage("❌ Image upload failed");
      }

      const imageUrl = data.secure_url;

      // 2️⃣ Save to Firestore
      await addDoc(collection(db, "potholes"), {
        latitude: coords.lat,
        longitude: coords.lon,
        severity: severity,
        image_url: imageUrl,
        timestamp: Timestamp.now(),
      });

      setLoading(false);
      setMessage("✅ Pothole reported successfully!");
      setFile(null);
      setPreview(null);
      setCoords(null);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMessage("❌ Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🚧 Report Pothole</h2>

      {/* LOCATION */}
      <button style={styles.btn} onClick={getLocation}>
        Capture Location
      </button>
      {coords && (
        <p>
          📍 {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)}
        </p>
      )}

      {/* FILE */}
      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && <img src={preview} alt="preview" style={styles.preview} />}

      {/* SEVERITY */}
      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        style={styles.select}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      {/* SUBMIT */}
      <button style={styles.submit} onClick={submitReport} disabled={loading}>
        {loading ? "Submitting..." : "Submit Report"}
      </button>

      <p>{message}</p>
    </div>
  );
}

// 🎨 Styles
const styles = {
  container: {
    maxWidth: 400,
    margin: "auto",
    padding: 20,
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: 10,
  },
  btn: { padding: 10, marginBottom: 10, cursor: "pointer" },
  submit: {
    padding: 12,
    marginTop: 10,
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  preview: { width: "100%", marginTop: 10, borderRadius: 8 },
  select: { marginTop: 10, padding: 8, width: "100%" },
};