import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../store/slices/flightsSlice';
import FlightCard from '../components/FlightCard';
import './Flights.css';

const Flights = () => {
    const dispatch = useDispatch();
    const flights = useSelector((state) => state.flights.flights);
    const loading = useSelector((state) => state.flights.loading);
    const error = useSelector((state) => state.flights.error);

    useEffect(() => {
        dispatch(fetchFlights());
    }, [dispatch]);

    return (
        <div className="flights-container">
            <h1>Flight Management</h1>
            {loading && <p>Loading flights...</p>}
            {error && <p>Error loading flights: {error}</p>}
            <div className="flights-list">
                {flights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                ))}
            </div>
        </div>
    );
};

export default Flights;