import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Flights from './Flights';
import Booking from './Booking';
import Passengers from './Passengers';
import Staff from './Staff';
import Dashboard from './Dashboard';
import Contact from './Contact';
import Chatbot from './Chatbot';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
