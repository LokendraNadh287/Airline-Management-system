import React from 'react';
import HeroBanner from '../components/HeroBanner';
import NavMenu from '../components/NavMenu';
import FlightStatusPanel from '../components/FlightStatusPanel';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <HeroBanner />
            <NavMenu />
            <FlightStatusPanel />
            <Footer />
        </div>
    );
};

export default Home;