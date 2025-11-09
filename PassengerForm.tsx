import React, { useState } from 'react';

const PassengerForm = () => {
    const [passengerData, setPassengerData] = useState({
        name: '',
        contact: '',
        seat: '',
        ticketInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassengerData({
            ...passengerData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle passenger data submission
        console.log('Passenger Data Submitted:', passengerData);
    };

    return (
        <form onSubmit={handleSubmit} className="passenger-form">
            <h2>Passenger Details</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={passengerData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="contact">Contact:</label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={passengerData.contact}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="seat">Seat:</label>
                <input
                    type="text"
                    id="seat"
                    name="seat"
                    value={passengerData.seat}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="ticketInfo">Ticket Info:</label>
                <input
                    type="text"
                    id="ticketInfo"
                    name="ticketInfo"
                    value={passengerData.ticketInfo}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PassengerForm;