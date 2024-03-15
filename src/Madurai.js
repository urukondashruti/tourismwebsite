import React,{useState} from 'react';
import FlightBooking from "./FlightBooking";
import HotelBooking from "./HotelBooking";
import "./Madurai.css";

function Madurai() {
    return (
        <div className="background3">
            <img className="size5" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg" alt='...'/>
            <div>
            <h1>All the places which will be covered in this trip!
            </h1>
            <ol>
           <li>Madurai Meenakshi Amman Temple</li> 
           <li>Alagarkoil Temple and Shrine</li>
           <li>
           Pazhamudhir Solai
           </li>
           <li>Gandhi Memorial Museum</li>
           <li>Aayiram Kaal Mandapam</li>
           <li>Koodal Azhagar Temple</li>
           <li>Thirumalai Nayakar Mahal</li>
           <li>Tirupparankunram</li>
            </ol>
            <FlightBooking/>
            <HotelBooking/>
            </div>
           </div>
    );
}

export default Madurai;