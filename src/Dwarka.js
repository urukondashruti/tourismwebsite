import React,{useState} from 'react';
import FlightBooking from "./FlightBooking";
import HotelBooking from "./HotelBooking";
import "./Dwarka.css";

function Dwarka() {
    return (
        <div className="background3">
            <img className="size5" src="https://lh3.googleusercontent.com/p/AF1QipO-IWuns7oe7SOowzh3mZiIqKdvvDoX9dJzYPEK" alt='...'/>
            <div>
            <h1>All the places which will be covered in this trip!
            </h1>
            <ol>
                <li>
                Nageshwar Jyotirlinga
                </li>
                <li>Bet Dwarka</li>
                <li>
                    Dwarka Beach
                </li>
                <li>
                    Gopi talav
                </li>
                <li>Brahma Kapal</li>
                <li>Gomti Ghat</li>
                <li>Gita temple</li>
                <li>ISKCON Dwarka</li>
            </ol>
            <FlightBooking/>
            <HotelBooking/>
            </div>
           </div>
    );
}

export default Dwarka;