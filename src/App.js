import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import HolidayPackages from './HolidayPackages';
import FlightBooking from './FlightBooking';
import HotelBooking from './HotelBooking';
import PackageCollections from './PackageCollections';
import Home from "./Home";
import Madurai from './Madurai';
import Dwarka from './Dwarka';
import Badrinath from './Badrinath';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                    <Route exact path="/packages" component={HolidayPackages} />
                    <Route path="/flights" component={FlightBooking} />
                    <Route path="/hotels" component={HotelBooking} />
                    <Route path="/collections" component={PackageCollections} />
                    <Route path="/madurai" component={Madurai} />
                    <Route path="/Dwarka" component={Dwarka} />
                    <Route path="/badrinath" component={Badrinath} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;