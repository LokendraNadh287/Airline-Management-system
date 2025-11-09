import { Passenger } from '../types';

const passengers: Passenger[] = [];

export const getPassengers = () => {
    return passengers;
};

export const addPassenger = (passenger: Passenger) => {
    passengers.push(passenger);
};

export const updatePassenger = (updatedPassenger: Passenger) => {
    const index = passengers.findIndex(p => p.id === updatedPassenger.id);
    if (index !== -1) {
        passengers[index] = updatedPassenger;
    }
};

export const deletePassenger = (passengerId: string) => {
    const index = passengers.findIndex(p => p.id === passengerId);
    if (index !== -1) {
        passengers.splice(index, 1);
    }
};