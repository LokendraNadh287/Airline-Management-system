import React from 'react';
import AnalyticsWidget from '../components/AnalyticsWidget';
import FlightStatusPanel from '../components/FlightStatusPanel';
import StaffSchedule from '../components/StaffSchedule';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <div className="analytics-section">
                <AnalyticsWidget />
            </div>
            <div className="flight-status-section">
                <h2>Real-Time Flight Status</h2>
                <FlightStatusPanel />
            </div>
            <div className="staff-schedule-section">
                <h2>Staff Schedule</h2>
                <StaffSchedule />
            </div>
        </div>
    );
};

export default Dashboard;