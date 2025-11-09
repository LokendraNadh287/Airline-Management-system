import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Airline Management System</h1>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/flights">Flight Management</Link></li>
                    <li><Link to="/booking">Booking System</Link></li>
                    <li><Link to="/passengers">Passenger Management</Link></li>
                    <li><Link to="/staff">Staff Management</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="chatbot">
                {/* Chatbot component can be integrated here */}
            </div>
        </header>
    );
};

export default Header;