export interface Flight {
    flightNumber: string;
    route: string;
    schedule: Date;
    status: 'On Time' | 'Delayed' | 'Cancelled';
}

export interface Booking {
    bookingId: string;
    flightNumber: string;
    passengerId: string;
    seatNumber: string;
    status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface Passenger {
    passengerId: string;
    name: string;
    contact: string;
    ticketInfo: string;
}

export interface Staff {
    staffId: string;
    name: string;
    role: 'Pilot' | 'Crew';
    schedule: Date[];
}

export interface ChatbotResponse {
    message: string;
    timestamp: Date;
}