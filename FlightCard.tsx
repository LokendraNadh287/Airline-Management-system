import React from 'react';

interface FlightCardProps {
    flightNumber: string;
    route: string;
    schedule: string;
    status: string;
}

const FlightCard: React.FC<FlightCardProps> = ({ flightNumber, route, schedule, status }) => {
    return (
        <div className="flight-card">
            <h3 className="flight-number">Flight: {flightNumber}</h3>
            <p className="flight-route">Route: {route}</p>
            <p className="flight-schedule">Schedule: {schedule}</p>
            <p className={`flight-status ${status.toLowerCase()}`}>Status: {status}</p>
        </div>
    );
};

export default FlightCard;