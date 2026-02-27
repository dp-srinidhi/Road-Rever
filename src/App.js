import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// Pages
import ReportPothole from './pages/ReportPothole';
import MapPage from './pages/MapPage';
import Dronedata from "./pages/Dronedata";   
import Trafficanalysis from "./pages/trafficanalysis";


// CSS
import "./App.css";

// Images
import roadsHeaderImage from './images/road.png';
import potholeDetectionImage from './images/pothole.png';
import mappingImage from './images/map.png';
import roverImage from './images/rover.png';

// ------------------- Home Content -------------------
const HomeContent = () => {
    const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/600x400/e0f2f1/004d40?text=Image+Missing';
        e.target.style.border = '1px dashed #004d40';
    };

    return (
        <>
            <header className="hero-section">
                <div className="container">
                    <h1>ROAD REVER</h1>
                    <p className="subtitle">REVOLUTIONIZING ROAD SAFETY AND SUSTAINABILITY</p>
                    <p>
                        Road Rever leverages cutting-edge drones, AI, and rovers to detect and repair
                        road defects instantly. We offer automated, AI-powered road monitoring,
                        precise pothole filling, and real-time mapping.
                    </p>
                 </div>
            </header>

            <img
                src={roadsHeaderImage}
                alt="Roads composite header"
                className="full-width-image"
                onError={handleImageError}
            />

            <main>
                {/* About */}
                <section id="about" className="cta-section text-center">
                    <div className="container">
                        <h2>
                            To build intelligent, automated road-maintenance technology that supports
                            cities in creating safer, smoother, and longer-lasting roads.
                        </h2>
                    </div>
                </section>

                {/* Drone Detection */}
                <section id="services" className="feature-section">
                    <div className="container grid-container">
                        <div className="text-content">
                            <h2>Drones Scan Roads – Detect potholes using ML models.</h2>
                            <p>
                                Drones equipped with high-resolution cameras automatically capture road
                                data and detect potholes before they become hazardous.
                            </p>
                        </div>
                        <div className="image-content">
                            <img
                                src={potholeDetectionImage}
                                alt="Potholes detected with bounding boxes"
                                onError={handleImageError}
                            />
                        </div>
                    </div>
                </section>

                {/* Mapping */}
                <section className="feature-section bg-light">
                    <div className="container grid-container reverse">
                        <div className="text-content">
                            <h2>Potholes Are Mapped – Locations are sent to our central dashboard.</h2>
                            <p>
                                Pothole data is transmitted to Firebase and displayed on an interactive,
                                real-time map.
                            </p>
                        </div>
                        <div className="image-content">
                            <img
                                src={mappingImage}
                                alt="Digital map of a city"
                                onError={handleImageError}
                            />
                        </div>
                    </div>
                </section>

                {/* Rover */}
                <section className="feature-section">
                    <div className="container grid-container">
                        <div className="text-content">
                            <h2>Rovers Fill the Potholes</h2>
                            <p>
                                After mapping, autonomous rovers precisely fill the potholes with
                                minimal traffic disruption.
                            </p>
                        </div>
                        <div className="image-content">
                            <img
                                src={roverImage}
                                alt="Autonomous road repair rover"
                                onError={handleImageError}
                            />
                        </div>
                    </div>
                </section>

                {/* Smart Pothole Filling */}
                <section id="why" className="smart-filling-section bg-light">
                    <div className="container text-center">
                        <h2>SMART POTHOLE FILLING</h2>
                        <p className="section-intro">
                            Making cities pothole-free using automation and intelligent robotics.
                        </p>

                        <div className="feature-card-grid">
                            <div className="feature-card">
                                <h3> Report Potholes</h3>
                                <p>Users can report potholes with image and location (Admin-side only now).</p>
                            </div>
                            <div className="feature-card">
                                <h3> Aerial Pothole Detection</h3>
                                <p>Drones capture ultra-high-res images and map potholes in real time.</p>
                            </div>
                            <div className="feature-card">
                                <h3> Autonomous Robotic Repair</h3>
                                <p>Rovers automatically fill and seal potholes with precision.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
<section id="contact" className="contact-section">
    <div className="container text-center">
        <h2>Connect With Us</h2>
        <p className="section-intro">
            Let’s work together to build safer, smarter roads.
        </p>

        <div className="contact-details">
            <p><strong>Email:</strong> roadrever@gmail.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Chennai, India</p>
        </div>

        <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">
                Send Message
            </button>
        </form>
    </div>
</section>
            </main>
        </>
    );
};

// ------------------- Navbar -------------------
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavLinkClick = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo" onClick={handleNavLinkClick}>ROAD REVER</Link>
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>

                <ul className={isOpen ? "nav-links active" : "nav-links"}>

    <li><Link to="/report-pothole" className="nav-link" onClick={handleNavLinkClick}>Report Pothole</Link></li>
   <li><Link to="/map" className="nav-link" onClick={handleNavLinkClick}>Map</Link></li>
   <li>
        <Link to="/trafficanalysis" className="nav-link" onClick={handleNavLinkClick}>
            Traffic status
        </Link>
    </li>        
                </ul>
            </div>
        </nav>
    );
};

// ------------------- App -------------------
function App() {
    return (
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="/report-pothole" element={<ReportPothole />} />
                    <Route path="/map" element={<MapPage />} />
                     <Route path="/Dronedata" element={<Dronedata />} />
                    <Route path="/trafficanalysis" element={<Trafficanalysis />} />
                 </Routes>

                <footer className="footer-section">
                    <div className="container">
                        <p>About Us | Why Road Rever | Contact</p>
                        <p>&copy; {new Date().getFullYear()} Road Rever. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        );
}

export default App;
