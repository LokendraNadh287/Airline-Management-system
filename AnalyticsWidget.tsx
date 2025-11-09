import React from 'react';

const AnalyticsWidget: React.FC = () => {
    // Mock data for analytics
    const analyticsData = {
        totalFlights: 120,
        totalBookings: 3500,
        totalPassengers: 5000,
        onTimeDepartures: 95,
        delayedDepartures: 5,
    };

    return (
        <div className="analytics-widget">
            <h2>Analytics Overview</h2>
            <div className="analytics-cards">
                <div className="card">
                    <h3>Total Flights</h3>
                    <p>{analyticsData.totalFlights}</p>
                </div>
                <div className="card">
                    <h3>Total Bookings</h3>
                    <p>{analyticsData.totalBookings}</p>
                </div>
                <div className="card">
                    <h3>Total Passengers</h3>
                    <p>{analyticsData.totalPassengers}</p>
                </div>
                <div className="card">
                    <h3>On-Time Departures</h3>
                    <p>{analyticsData.onTimeDepartures}%</p>
                </div>
                <div className="card">
                    <h3>Delayed Departures</h3>
                    <p>{analyticsData.delayedDepartures}%</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsWidget;