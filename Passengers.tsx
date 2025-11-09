import React, { useEffect, useState } from 'react';
import PassengerForm from '../components/PassengerForm';
import { fetchPassengers, deletePassenger } from '../services/passengersService';

const Passengers = () => {
    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        const loadPassengers = async () => {
            const data = await fetchPassengers();
            setPassengers(data);
        };
        loadPassengers();
    }, []);

    const handleDelete = async (id) => {
        await deletePassenger(id);
        setPassengers(passengers.filter(passenger => passenger.id !== id));
    };

    return (
        <div className="passengers-page">
            <h1>Passenger Management</h1>
            <PassengerForm />
            <table className="passenger-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Seat</th>
                        <th>Ticket Info</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {passengers.map(passenger => (
                        <tr key={passenger.id}>
                            <td>{passenger.name}</td>
                            <td>{passenger.contact}</td>
                            <td>{passenger.seat}</td>
                            <td>{passenger.ticketInfo}</td>
                            <td>
                                <button onClick={() => handleDelete(passenger.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Passengers;