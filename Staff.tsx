import React, { useEffect, useState } from 'react';
import StaffSchedule from '../components/StaffSchedule';
import { fetchStaffSchedules } from '../services/staffService';

const Staff = () => {
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSchedules = async () => {
            try {
                const data = await fetchStaffSchedules();
                setSchedules(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getSchedules();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="staff-management">
            <h1>Staff Management</h1>
            <StaffSchedule schedules={schedules} />
        </div>
    );
};

export default Staff;