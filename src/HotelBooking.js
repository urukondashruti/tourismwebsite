import React,{useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./HotelBooking.css";

function HotelBooking() {
    const [city, setCity] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [hotels, setHotels] = useState([
      { id: 1, name: 'Hotel A', city: 'New York', price: 150 },
      { id: 2, name: 'Hotel B', city: 'New York', price: 200 },
      { id: 3, name: 'Hotel C', city: 'Los Angeles', price: 180 },
      { id: 4, name: 'Hotel D', city: 'Los Angeles', price: 220 },
    ]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
  
    const searchHotels = () => {
      const results = hotels.filter(hotel =>
        hotel.city.toLowerCase() === city.toLowerCase()
      );
      setSearchResults(results);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      searchHotels();
    };
  
    const handleBookHotel = (hotelId) => {
      const hotel = hotels.find(hotel => hotel.id === hotelId);
      setSelectedHotel(hotel);
    };
  
    return (
        <div className="div5">
            <div className="div1">
            <h2>Hotel Search</h2>
            <div className="icon1">
                  <i className="fas fa-hotel"></i>
            </div>
            </div>
      <form onSubmit={handleSearch}>
        <label className="label1">
          City:
          <input type="text" className="input3" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <br />
        <label className="label1">
          Check-in Date:
          <input type="date" className="input4" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
        </label>
        <br />
        <label className="label1">
          Check-out Date:
          <input type="date" className="input5" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Search Hotels</button>
      </form>
      {searchResults.length >0 ? <div className="selectedcon"><h2 className="head">Results</h2>
      <ul>
        {searchResults.map(hotel => (
          <li key={hotel.id}>
            {hotel.name}, {hotel.city}, ${hotel.price} per night
            <button className="but1" onClick={() => handleBookHotel(hotel.id)}>Book</button>
          </li>
        ))}
      </ul></div>:null}

      {selectedHotel && (
        <div className="selectedcon">
          <h2>Selected Hotel</h2>
          <p>{selectedHotel.name}, {selectedHotel.city}, ${selectedHotel.price} per night</p>
          <p>Check-in: {checkInDate}, Check-out: {checkOutDate}</p>
          <p>Thank you for booking!</p>
        </div>
      )}
    </div>
    );
}

export default HotelBooking;