import React, { useEffect, useState } from 'react';
import { getFlightStatus } from '../services/flightsService';

const FlightStatusPanel = () => {
    const [flightStatus, setFlightStatus] = useState([]);

    useEffect(() => {
        const fetchFlightStatus = async () => {
            const statusData = await getFlightStatus();
            setFlightStatus(statusData);
        };

        fetchFlightStatus();
        const interval = setInterval(fetchFlightStatus, 60000); // Refresh every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flight-status-panel">
            <h2>Real-Time Flight Status</h2>
            <table>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Route</th>
                        <th>Status</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                    </tr>
                </thead>
                <tbody>
                    {flightStatus.map((flight) => (
                        <tr key={flight.flightNumber}>
                            <td>{flight.flightNumber}</td>
                            <td>{flight.route}</td>
                            <td>{flight.status}</td>
                            <td>{flight.departureTime}</td>
                            <td>{flight.arrivalTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlightStatusPanel;