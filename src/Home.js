import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import HolidayPackages from './HolidayPackages';
import "./Home.css";

const text1={
    word:"National Destinations",
}

const text2={
    word:"International Destinations",
}

const national = [
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
      name: 'Agra',
      imageUrl:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/PTV-India-OG-Final.png',
      description:'Range starts from INR 21,000 Per Person',
    },
    {
      id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
      name: 'Kerala',
      imageUrl:
        'https://static.wanderon.in/wp-content/uploads/2023/09/untitled-design-2023-09-08t160707.893-min.png',
        description:'Range starts from INR 15,000 Per Person',
    },
    {
      id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
      name: 'Kashmir',
      imageUrl:
        'https://i.ytimg.com/vi/P4WEgOFp9VI/hq720.jpg',
        description:'Range starts from INR 19,000 Per Person',
    },
    {
      id: 'c2277c2c-f72e-11eb-9a03-0242ac130003',
      name: 'kolkata',
      imageUrl:
        'https://www.india-briefing.com/news/wp-content/uploads/2013/11/Kolkata-City-Profile.jpg',
        description:'Range starts from INR 18,000 Per Person',
    },
    {
      id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
      name: 'rajasthan',
      imageUrl:
        'https://img.jagranjosh.com/images/2022/March/3032022/Rajasthan-Day-min.png',
        description:'Range starts from INR 29,000 Per Person',
    },
]

const International = [
    {
      id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
      name: 'Switzerland',
      imageUrl:
        'https://nitsaholidays.in/uploads/blog/588661nitsa.jpg',
      description:'Range starts from INR 50,000 Per Person',
    },
    {
      id: 'c2277a74-f72e-11eb-9a03-0242ac130003',
      name: 'Paris',
      imageUrl:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
        description:'Range starts from INR 49,000 Per Person',
    },
    {
      id: 'c2277b64-f72e-11eb-9a03-0242ac130003',
      name: 'Russia',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/5/5b/1_Saint_Basils_Cathedral.jpg',
        description:'Range starts from INR 55,000 Per Person',
    },
    {
      id: 'c2277c2c-f72e-11eb-9a03-0242ac130004',
      name: 'Dubai',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XGcvB2oQXpG_J00iokoukDZH9_dnT1-aMg&usqp=CAU',
        description:'Range starts from INR 53,000 Per Person',
    },
    {
      id: 'c2277cea-f72e-11eb-9a03-0242ac130003',
      name: 'Hongkong',
      imageUrl:
        'https://static.wixstatic.com/media/2bcaac_4ee96b1900ad4a27a33ba9fddb7544b9.jpg/v1/crop/x_0,y_1,w_509,h_422/fill/w_552,h_462,al_c,lg_1,q_80,enc_auto/2bcaac_4ee96b1900ad4a27a33ba9fddb7544b9.jpg',
        description:'Range starts from INR 56,000 Per Person',
    },
]

function Home() {
    return (
        <div className="background1">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img class="size1" src="https://static.wixstatic.com/media/2d34e5_b534244efca647acba1d5e4aaeb2e613~mv2.png" />
            </a>
            <div className="navbar1">
            <i className="fas fa-question-circle helpicon"></i>
               <p>Help Center</p> 
            </div>
        </div>
    </nav>
    <div className="back1">
        <img className="img1" src="https://content3.jdmagicbox.com/comp/tuni/d5/9999p8854.8854.200127092312.v9d5/catalogue/gogaga-holidays-tuni-a053m8mvhz.jpg" alt=".."/>
    </div>
    <div>
        <HolidayPackages list1={national} text={text1}/>
        <HolidayPackages list1={International} text={text2}/>
    </div>
    <div className="con5">
        <h1>Holiday Packages</h1>
        <div className="back5">
            <div className="div10">
                <img className="img5" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg"/>
                <h1 className="head1">Madurai</h1>
                <Link to="/madurai">
                <p>Details</p>
                </Link>
            </div>
            <div className="div10">
                <img className="img5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6ZLImUuREI6HVfE_K4_ZC80-mEpFbVig2Q&usqp=CAU"/>
                <h1  className="head1">Dwarka</h1>
                <Link to="/Dwarka">
                <p>Details</p>
                </Link>
            </div>
            <div className="div10">
                <img className="img5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXONcaEcgOz8u2N630ZonB7ioE7cgtSfXHw&usqp=CAU"/>
                <h1  className="head1">Badrinath Temple</h1>
                <Link to="/badrinath">
                <p>Details</p>
                </Link>
            </div>
        </div>
        </div>
        <div className="icons10">
      <a className="a1" href="https://twitter.com">
        <i className="fab fa-twitter"></i>
      </a>
      <a className="a1" href="https://linkedin.com">
        <i className="fab fa-linkedin"></i>
      </a>
      <a className="a1" href="https://facebook.com">
        <i className="fab fa-facebook"></i>
      </a>
      <a className="a1" href="https://instagram.com">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
    </div>
    );
}

export default Home;