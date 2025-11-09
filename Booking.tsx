import React, { useState, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import FlightStatusPanel from '../components/FlightStatusPanel';
import { fetchAvailableFlights } from '../services/bookingsService';

const Booking = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFlights = async () => {
            try {
                const availableFlights = await fetchAvailableFlights();
                setFlights(availableFlights);
            } catch (error) {
                console.error('Error fetching flights:', error);
            } finally {
                setLoading(false);
            }
        };

        loadFlights();
    }, []);

    return (
        <div className="booking-page">
            <h1>Book Your Flight</h1>
            {loading ? (
                <p>Loading available flights...</p>
            ) : (
                <>
                    <FlightStatusPanel />
                    <BookingForm flights={flights} />
                </>
            )}
        </div>
    );
};

export default Booking;