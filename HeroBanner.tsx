import React from 'react';
import './HeroBanner.css'; // Assuming you have a CSS file for styling

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <div className="hero-content">
                <h1>Welcome to Our Airline</h1>
                <p>Your journey begins here. Explore our flight options and book your next adventure!</p>
                <a href="/booking" className="btn-book">Book Now</a>
            </div>
            <div className="hero-image">
                <img src="/path/to/airplane-image.jpg" alt="Airplane" />
            </div>
        </div>
    );
};

export default HeroBanner;