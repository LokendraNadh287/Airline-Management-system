import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookFlight } from '../store/slices/bookingsSlice';

const BookingForm = () => {
    const dispatch = useDispatch();
    const [flightNumber, setFlightNumber] = useState('');
    const [passengerName, setPassengerName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [seatPreference, setSeatPreference] = useState('Economy');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingData = {
            flightNumber,
            passengerName,
            contactInfo,
            seatPreference,
        };
        dispatch(bookFlight(bookingData));
        // Reset form fields
        setFlightNumber('');
        setPassengerName('');
        setContactInfo('');
        setSeatPreference('Economy');
    };

    return (
        <div className="booking-form">
            <h2>Book Your Flight</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="flightNumber">Flight Number:</label>
                    <input
                        type="text"
                        id="flightNumber"
                        value={flightNumber}
                        onChange={(e) => setFlightNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="passengerName">Passenger Name:</label>
                    <input
                        type="text"
                        id="passengerName"
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactInfo">Contact Info:</label>
                    <input
                        type="email"
                        id="contactInfo"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="seatPreference">Seat Preference:</label>
                    <select
                        id="seatPreference"
                        value={seatPreference}
                        onChange={(e) => setSeatPreference(e.target.value)}
                    >
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First Class">First Class</option>
                    </select>
                </div>
                <button type="submit">Book Flight</button>
            </form>
        </div>
    );
};

export default BookingForm;