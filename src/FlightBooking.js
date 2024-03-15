import React,{useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./FlightBooking.css";


function FlightBooking() {
    const [departureCity, setDepartureCity] = useState('');
    const [arrivalCity, setArrivalCity] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [flights, setFlights] = useState([
      { id: 1, departure: 'New York', arrival: 'Los Angeles', date: '2024-03-20', price: 200 },
      { id: 2, departure: 'New York', arrival: 'Chicago', date: '2024-03-20', price: 150 },
      { id: 3, departure: 'Los Angeles', arrival: 'New York', date: '2024-03-22', price: 220 },
    ]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);
  
    const searchFlights = () => {
      const results = flights.filter(flight =>
        flight.departure.toLowerCase() === departureCity.toLowerCase() &&
        flight.arrival.toLowerCase() === arrivalCity.toLowerCase() &&
        flight.date === departureDate
      );
      setSearchResults(results);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      searchFlights();
    };
  
    const handleBookFlight = (flightId) => {
      const flight = flights.find(flight => flight.id === flightId);
      setSelectedFlight(flight);
    };
  
    return (
        <div className="div5">
            <div className="div1">
            <h2>Flight Search</h2>
            <div className="icon1">
            <i className="fas fa-plane"></i>
            </div>
            </div>
      <form onSubmit={handleSearch}>
        <label className="label1">
          Departure City:
          <input type="text" className="input1"  value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
        </label>
        <br />
        <label className="label1">
          Arrival City:
          <input type="text" className="input2"value={arrivalCity} onChange={(e) => setArrivalCity(e.target.value)} />
        </label>
        <br />
        <label className="label1">
          Departure Date:
          <input type="date" className="input1" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Search Flights</button>
      </form>
     {searchResults.length > 0 ? <div className="selectedcon"><h2 className="head">Results</h2>
      <ul>
        {searchResults.map(flight => (
          <li key={flight.id}>
            {flight.departure} to {flight.arrival}, {flight.date}, ${flight.price}
            <button className="but1" onClick={() => handleBookFlight(flight.id)}>Book</button>
          </li>
        ))}
      </ul> </div>: null}

      {selectedFlight && (
        <div className="selectedcon">
          <h2>Selected Flight</h2>
          <p>{selectedFlight.departure} to {selectedFlight.arrival}, {selectedFlight.date}, ${selectedFlight.price}</p>
          <p>Thank you for booking!</p>
        </div>
      )}
    </div>
    );
}

export default FlightBooking;