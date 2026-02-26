import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { db } from "../firebaseClient";
import { collection, getDocs } from "firebase/firestore";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue in React + Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapView() {
  const [potholes, setPotholes] = useState([]);

  useEffect(() => {
    const fetchPotholes = async () => {
      try {
        const snapshot = await getDocs(collection(db, "potholes"));
        setPotholes(snapshot.docs.map(doc => doc.data()));
      } catch (err) {
        console.error("Error fetching potholes:", err);
      }
    };
    fetchPotholes();
  }, []);

  return (
    <MapContainer
      center={[12.9716, 77.5946]} // Bangalore default, change as needed
      zoom={12}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {potholes.map((p, i) => (
        <Marker key={i} position={[p.latitude, p.longitude]}>
          <Popup>
            <img src={p.image_url} alt="pothole" style={{ width: 200 }} />
            <p>Severity: {p.severity}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}