import React, { useEffect, useState } from "react";

const TrafficBarGraph = ({ level }) => {
  let width = "0%";
  let color = "green";

  if (level === "LOW TRAFFIC") {
    width = "30%";
    color = "green";
  } else if (level === "MODERATE TRAFFIC") {
    width = "60%";
    color = "red";
  } else if (level === "HIGH TRAFFIC") {
    width = "90%";
    color = "red";
  }

  return (
    <div className="w-full bg-gray-200 h-4 rounded">
      <div
        className="h-4 rounded"
        style={{ width, backgroundColor: color }}
      ></div>
    </div>
  );
};

const TrafficAnalysis = () => {
  const [traffic, setTraffic] = useState(null);

  const API_KEY = "SNWBg2fjAKLQMclA9au05qQM5V0R46Y7";

  const locations = [
    { name: "Bannari Amman Institute of Technology", point: "11.4952,77.2764" },
    { name: "Sathyamangalam", point: "11.5048,77.2384" },
    { name: "Peelamedu", point: "11.0198,77.0324" },
    { name: "Koundampalayam", point: "11.0401,76.9449" },
    { name: "R.S. Puram", point: "11.0107,76.9487" },
    { name: "Gandhipuram", point: "11.0168,76.9553" },
    { name: "Town Hall", point: "10.9961,76.9620" },
    { name: "Oothur", point: "11.47,77.27" },
    { name: "Periyakodiveri", point: "11.4731,77.2966" },
    { name: "Malyadipudur", point: "11.49,77.29" },
    { name: "Kaliyur", point: "11.48,77.26" },
    { name: "Konamoolai", point: "11.50,77.24" },
    { name: "Erode", point: "11.3410,77.7172" }
  ];

  function getTrafficLevel(value) {
    if (value <= 30) return "LOW TRAFFIC";
    if (value > 30 && value <= 50) return "MODERATE TRAFFIC";
    return "HIGH TRAFFIC";
  }

  useEffect(() => {
    async function fetchTraffic() {
      const results = [];

      for (let loc of locations) {
        const url = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?point=${loc.point}&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data && data.flowSegmentData) {
          const seg = data.flowSegmentData;
          const congestionPercent = Math.round(
            ((seg.freeFlowSpeed - seg.currentSpeed) / seg.freeFlowSpeed) * 100
          );
          const trafficLevel = getTrafficLevel(congestionPercent);

          results.push({
            area: loc.name,
            currentSpeed: seg.currentSpeed + " km/h",
            freeFlow: seg.freeFlowSpeed + " km/h",
            confidence: seg.confidence,
            congestion: congestionPercent + "%",
            status: trafficLevel,
            roverOK: trafficLevel === "HIGH TRAFFIC" ? "❌ No" : "✅ Yes"
          });
        }
      }

      setTraffic(results);
    }

    fetchTraffic();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Live Traffic Analysis</h1>

      {!traffic ? (
        <p className="text-center font-semibold text-gray-600">Loading live traffic...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-green-900 text-white text-left">
                <th className="p-4">Area</th>
                <th className="p-4">Current Speed</th>
                <th className="p-4">Free Flow Speed</th>
                <th className="p-4">Traffic</th>
                 <th className="p-4">Rover Deployment</th>
                <th className="p-4">Level Bar</th> {/* MINI BAR */}
              </tr>
            </thead>
            <tbody>
              {traffic.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-50 border-b" : "bg-white border-b"}
                >
                  <td className="p-4 font-semibold">{row.area}</td>
                  <td className="p-4">{row.currentSpeed}</td>
                  <td className="p-4">{row.freeFlow}</td>
                  <td className="p-4">{row.congestion}</td>

                

                  <td className="p-4 text-lg">{row.roverOK}</td>

                  {/* MINI LEVEL BAR */}
                  <td className="p-2 w-[150px]">
                    <TrafficBarGraph level={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TrafficAnalysis;
