import React, { useEffect, useState } from 'react';
import { StaffMember } from '../types';
import { fetchStaffSchedule } from '../services/staffService';

const StaffSchedule: React.FC = () => {
    const [staffSchedule, setStaffSchedule] = useState<StaffMember[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSchedule = async () => {
            try {
                const scheduleData = await fetchStaffSchedule();
                setStaffSchedule(scheduleData);
            } catch (err) {
                setError('Failed to load staff schedule');
            } finally {
                setLoading(false);
            }
        };

        loadSchedule();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="staff-schedule">
            <h2>Staff Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Flight Number</th>
                        <th>Schedule</th>
                    </tr>
                </thead>
                <tbody>
                    {staffSchedule.map((staff) => (
                        <tr key={staff.id}>
                            <td>{staff.name}</td>
                            <td>{staff.role}</td>
                            <td>{staff.flightNumber}</td>
                            <td>{staff.schedule}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffSchedule;