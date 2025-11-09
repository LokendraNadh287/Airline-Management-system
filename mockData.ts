const mockFlights = [
  {
    flightNumber: "AA101",
    route: "New York (JFK) to Los Angeles (LAX)",
    schedule: "2023-10-01T10:00:00Z",
    status: "On Time",
  },
  {
    flightNumber: "DL202",
    route: "Chicago (ORD) to Miami (MIA)",
    schedule: "2023-10-01T12:30:00Z",
    status: "Delayed",
  },
  {
    flightNumber: "UA303",
    route: "San Francisco (SFO) to Seattle (SEA)",
    schedule: "2023-10-01T15:45:00Z",
    status: "Cancelled",
  },
];

const mockPassengers = [
  {
    name: "John Doe",
    contact: "john.doe@example.com",
    seat: "12A",
    ticketInfo: "AA101-123456",
  },
  {
    name: "Jane Smith",
    contact: "jane.smith@example.com",
    seat: "14B",
    ticketInfo: "DL202-654321",
  },
];

const mockStaff = [
  {
    name: "Captain Mike",
    role: "Pilot",
    schedule: "2023-10-01T09:00:00Z",
  },
  {
    name: "Flight Attendant Sarah",
    role: "Crew",
    schedule: "2023-10-01T10:00:00Z",
  },
];

export { mockFlights, mockPassengers, mockStaff };