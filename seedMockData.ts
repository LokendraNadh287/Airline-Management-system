import { Flight, Passenger, Booking, Staff } from '../src/types';

const mockFlights: Flight[] = [
    {
        flightNumber: 'AA101',
        route: 'New York - Los Angeles',
        schedule: '2023-10-01T10:00:00Z',
        status: 'On Time',
    },
    {
        flightNumber: 'BA202',
        route: 'London - New York',
        schedule: '2023-10-02T15:30:00Z',
        status: 'Delayed',
    },
    {
        flightNumber: 'CA303',
        route: 'Tokyo - Sydney',
        schedule: '2023-10-03T08:45:00Z',
        status: 'Cancelled',
    },
];

const mockPassengers: Passenger[] = [
    {
        name: 'John Doe',
        contact: 'john.doe@example.com',
        seat: '12A',
        ticketInfo: 'AA101-123456',
    },
    {
        name: 'Jane Smith',
        contact: 'jane.smith@example.com',
        seat: '14B',
        ticketInfo: 'BA202-654321',
    },
];

const mockBookings: Booking[] = [
    {
        bookingId: 'BKG123',
        flightNumber: 'AA101',
        passengerName: 'John Doe',
        seat: '12A',
    },
    {
        bookingId: 'BKG456',
        flightNumber: 'BA202',
        passengerName: 'Jane Smith',
        seat: '14B',
    },
];

const mockStaff: Staff[] = [
    {
        name: 'Captain Jack',
        role: 'Pilot',
        schedule: '2023-10-01T10:00:00Z',
    },
    {
        name: 'First Officer Anne',
        role: 'Co-Pilot',
        schedule: '2023-10-01T10:00:00Z',
    },
];

const seedMockData = () => {
    // Here you would typically save the mock data to your database or state management
    console.log('Seeding mock data...');
    console.log('Flights:', mockFlights);
    console.log('Passengers:', mockPassengers);
    console.log('Bookings:', mockBookings);
    console.log('Staff:', mockStaff);
};

seedMockData();