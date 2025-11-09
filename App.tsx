import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Flights from './pages/Flights';
import Booking from './pages/Booking';
import Passengers from './pages/Passengers';
import Staff from './pages/Staff';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';
import './assets/styles/globals.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/flights" component={Flights} />
        <Route path="/booking" component={Booking} />
        <Route path="/passengers" component={Passengers} />
        <Route path="/staff" component={Staff} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Chatbot />
      <Footer />
    </Router>
  );
};

export default App;