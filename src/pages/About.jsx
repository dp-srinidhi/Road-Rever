import React from "react";
import { Link } from "react-router-dom";
import {
  Drone,
  Car,
  Bot,
  BarChart3,
  Mail,
  Phone
} from "lucide-react";

const About = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-green-800 to-green-600 text-white rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-bold mb-6">
          Smart Roads. Zero Potholes.
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Road Rever uses AI, drones, IoT, and autonomous rovers
          to automate road inspection and eliminate potholes efficiently.
        </p>
        <Link to="/dronedata">
          <button className="bg-white text-green-900 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore Technology
          </button>
        </Link>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 px-6 md:px-20 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Drone */}
          <Link to="/dronedata">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center cursor-pointer">
              <Drone size={48} className="mx-auto text-green-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Drone Data Collection
              </h3>
              <p className="text-gray-600">
                High-resolution aerial scanning of roads for early defect detection.
              </p>
            </div>
          </Link>

          {/* Traffic */}
          <Link to="/trafficanalysis">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center cursor-pointer">
              <Car size={48} className="mx-auto text-green-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Traffic & Weather Analytics
              </h3>
              <p className="text-gray-600">
                Smart degradation prediction using traffic and climate data.
              </p>
            </div>
          </Link>

          {/* Rover */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
            <Bot size={48} className="mx-auto text-green-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Autonomous Rover Inspection
            </h3>
            <p className="text-gray-600">
              Ground-level analysis and precise pothole measurements.
            </p>
          </div>

          {/* AI Analysis */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center">
            <BarChart3 size={48} className="mx-auto text-green-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              AI Road Quality Analysis
            </h3>
            <p className="text-gray-600">
              Machine learning models detect cracks, potholes, and surface damage.
            </p>
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Drone Scan", "AI Detection", "Traffic Analysis", "Rover Repair"].map(
            (step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl font-bold text-green-700 mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-16 px-6 md:px-20 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-10">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-2xl space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-green-700" />
            <p>roadrever.startup@gmail.com</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Phone className="text-green-700" />
            <p>+91 98765 43210</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;