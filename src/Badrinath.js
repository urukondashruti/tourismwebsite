import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FlightBooking from "./FlightBooking";
import HotelBooking from "./HotelBooking";

import "./Badrinath.css";

function Badrinath() {
    return (
           <div className="background3">
            <img className="size5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHh_Oy518htmd_TAhQp-JU3l0dqO31V6PqmA&usqp=CAU" alt='...'/>
            <div>
            <h1>All the places which will be covered in this trip!
            </h1>
            <ol>
                <li>
                Shri Badrinath Ji Temple
                </li>
                <li>Vasudhara Falls</li>
                <li>
                    Tapt Kund
                </li>
                <li>
                    Bheem Pul
                </li>
                <li>Brahma Kapal</li>
                <li>Saraswati river</li>
                <li>Alka puri</li>
                <li>Ganesh Gufa</li>
                <li>Vyas Gufa</li>
            </ol>
            <FlightBooking/>
            <HotelBooking/>
            </div>
           </div>
    );
}

export default Badrinath;