import React, { useEffect, useState } from "react";

const locations = [
  "BIT",
  "Sathyamangalam",
  "Peelamedu",
  "Koundampalayam",
  "R.S. Puram",
  "Gandhipuram",
  "Erode"
];

const TrafficAnalysis = () => {
  const [traffic, setTraffic] = useState([]);

  function generateTraffic() {
    return locations.map((loc) => {
      const congestion = Math.floor(Math.random() * 100);

      let status = "LOW TRAFFIC";
      if (congestion > 30 && congestion <= 60) status = "MODERATE TRAFFIC";
      if (congestion > 60) status = "HIGH TRAFFIC";

      return {
        area: loc,
        congestion: congestion + "%",
        status,
        roverOK: status !== "HIGH TRAFFIC"
      };
    });
  }

  useEffect(() => {
    setTraffic(generateTraffic());

    const interval = setInterval(() => {
      setTraffic(generateTraffic());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (status) => {
    if (status === "LOW TRAFFIC")
      return <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">LOW</span>;
    if (status === "MODERATE TRAFFIC")
      return <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full">MODERATE</span>;
    return <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full">HIGH</span>;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Live Traffic Simulation</h1>

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-900 text-white text-left">
            <th className="p-4">Area</th>
            <th className="p-4">Congestion</th>
            <th className="p-4">Traffic Status</th>
            <th className="p-4">Rover Deployment</th>
          </tr>
        </thead>
        <tbody>
          {traffic.map((row, i) => (
            <tr key={i} className="border-b">
              <td className="p-4">{row.area}</td>
              <td className="p-4">{row.congestion}</td>
              <td className="p-4">{getStatusBadge(row.status)}</td>
              <td className="p-4">{row.roverOK ? "✅ Deploy" : "❌ Hold"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrafficAnalysis;