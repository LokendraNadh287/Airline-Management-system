# Airline Management System

Welcome to the Airline Management System project! This application is designed to streamline airline operations, manage flight schedules, facilitate ticket bookings, and maintain passenger details. Below is an overview of the project's structure and features.

## Project Structure

```
airline-management-system
├── public
│   ├── index.html          # Main HTML entry point
│   └── manifest.json       # Web application metadata
├── src
│   ├── assets
│   │   ├── fonts           # Font files used in the application
│   │   └── styles
│   │       ├── globals.css # Global styles
│   │       ├── components.css # Component-specific styles
│   │       └── theme.css   # Theme styles
│   ├── components
│   │   ├── Header.tsx      # Header component
│   │   ├── Footer.tsx      # Footer component
│   │   ├── HeroBanner.tsx   # Hero banner component
│   │   ├── NavMenu.tsx     # Navigation menu component
│   │   ├── FlightCard.tsx   # Flight details card component
│   │   ├── FlightStatusPanel.tsx # Real-time flight status panel
│   │   ├── BookingForm.tsx  # Ticket booking form
│   │   ├── PassengerForm.tsx # Passenger details form
│   │   ├── StaffSchedule.tsx # Staff schedule management
│   │   ├── AnalyticsWidget.tsx # Admin analytics widget
│   │   └── Chatbot.tsx     # AI chatbot integration
│   ├── pages
│   │   ├── Home.tsx        # Home page
│   │   ├── About.tsx       # About us page
│   │   ├── Flights.tsx      # Flight management page
│   │   ├── Booking.tsx      # Booking interface page
│   │   ├── Passengers.tsx   # Passenger management page
│   │   ├── Staff.tsx        # Staff management page
│   │   ├── Dashboard.tsx     # Admin dashboard
│   │   └── Contact.tsx      # Contact page
│   ├── services
│   │   ├── api.ts          # API calls
│   │   ├── flightsService.ts # Flight-related services
│   │   ├── bookingsService.ts # Booking-related services
│   │   ├── passengersService.ts # Passenger-related services
│   │   ├── staffService.ts  # Staff-related services
│   │   └── chatbotService.ts # Chatbot interaction services
│   ├── hooks
│   │   ├── useRealtime.ts   # Custom hook for real-time updates
│   │   └── useForm.ts       # Custom hook for form management
│   ├── store
│   │   ├── index.ts         # Redux store setup
│   │   └── slices
│   │       ├── flightsSlice.ts # Flight data slice
│   │       ├── bookingsSlice.ts # Booking data slice
│   │       └── passengersSlice.ts # Passenger data slice
│   ├── utils
│   │   └── mockData.ts      # Mock data for development
│   ├── types
│   │   └── index.ts         # TypeScript types and interfaces
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Entry point for the application
├── scripts
│   └── seedMockData.ts      # Script to seed mock data
├── .env.example              # Example environment variables
├── package.json              # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # Project documentation
```

## Features

- **Home Page**: Overview of the airline system with quick navigation and an attractive hero banner.
- **About Us**: Information about the airline and its management system goals.
- **Flight Management**: View, add, or edit flight details including flight number, route, schedule, and status.
- **Booking System**: Interface for checking available flights and booking tickets.
- **Passenger Management**: Manage passenger data including name, contact, seat, and ticket information.
- **Staff Management**: Manage pilot and crew schedules.
- **Dashboard (Admin Panel)**: Monitor operations and analytics for administrators.
- **Contact Page**: Contact form and airline support details.

## Design Preferences

- Professional aviation theme with white, blue, and sky gradient tones.
- AI chatbot integration for customer assistance.
- Real-time flight status panel (mock data acceptable).
- Mobile-friendly and easy to navigate.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd airline-management-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.