import React from "react";
import { useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import main from "../images/main.jpg";
import Gonda from "../img/Gonda.webp"
import Bird from "../img/Bird.jpg"
import "./Test.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Main (props) {
  useEffect(() => {
    Aos.init({duration:1000})
  }, []);
 
  const data = [
    {
      id: 1,
      imgSrc: main,
      Name: "Bahraich",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 0,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 2,
      imgSrc: Gonda,
      Name: "Gonda",
      location: "Uttar Pradesh",
      type: "Forest",
      budget:1000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 3,
      imgSrc: Bird,
      Name: "Basti",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 2000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 4,
      imgSrc: main,
      Name: "Gorakhpur",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3000,
      description:
        "Gorakhpur is a city in the Indian state of Uttar Pradesh, along the banks of the Rapti river in the Purvanchal region.It is situated 272 kilometers east of the state capital Lucknow. It is the administrative headquarters of Gorakhpur district, North Eastern Railway Zone and Gorakhpur division. The city is home to the Gorakhnath Math, a Gorakhnath temple. The city also has an Indian Air Force station, since 1963. Gita Press, the world's largest publisher of Hindu religious texts like Ramayana and Mahabharat is also located in Gorakhpur which was established here in 1926 "
    },
    {
      id: 5,
      imgSrc: main,
      Name: "Deoria",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 5000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 6,
      imgSrc: main,
      Name: "Ballia",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 4000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 7,
      imgSrc: main,
      Name: "Azamgarh",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 6000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 8,
      imgSrc: main,
      Name: "Sultanpur",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 7000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 9,
      imgSrc: main,
      Name: "Jaunpur",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 8000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 10,
      imgSrc: main,
      Name: "Ghazipur",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 9000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 12,
      imgSrc: main,
      Name: "Varansi",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 10000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 13,
      imgSrc: main,
      Name: "Mirzapur",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 11000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 14,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 12000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 15,
      imgSrc: main,
      Name: "Prayagraj",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 13000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 16,
      imgSrc: main,
      Name: "Pratapgrah",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 14000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 17,
      imgSrc: main,
      Name: "Ayodhya",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 15000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of ,the ocean buried",
    },
    {
      id: 18,
      imgSrc: main,
      Name: "Meerut",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 15000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 19,
      imgSrc: main,
      Name: "Bulandshahar",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 14000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 20,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 8000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 21,
      imgSrc: main,
      Name: "Ghazibad",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 9000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 22,
      imgSrc: main,
      Name: "Hapur",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 5000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 23,
      imgSrc: main,
      Name: "Baghpat",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 4000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 24,
      imgSrc: main,
      Name: "sharanpur",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 25,
      imgSrc: main,
      Name: "Muzaffarnagar",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 4500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 26,
      imgSrc: main,
      Name: "Shamli",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 5500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 27,
      imgSrc: main,
      Name: "Moradabad",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 6500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 28,
      imgSrc: main,
      Name: "Bijnor",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 1000,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 29,
      imgSrc: main,
      Name: "Amroha",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 2500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 30,
      imgSrc: main,
      Name: "Sambhal",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 31,
      imgSrc: main,
      Name: "Bareilly",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 32,
      imgSrc: main,
      Name: "Auriya",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 33,
      imgSrc: main,
      Name: "badayun",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 34,
      imgSrc: main,
      Name: "Pilibhit",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 35,
      imgSrc: main,
      Name: "Agra",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 36,
      imgSrc: main,
      Name: "Firozabad",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 37,
      imgSrc: main,
      Name: "Aligarh",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: 3500,
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
  ];

  



  const filteredData = data.filter(item => item.budget > props.value);


  return (
    <section className="point container section" >
      <div className="sectitle">
        <h3  data-aos="fade-right" className="title">Top Place Visited</h3>
      </div>

      <div data-aos="fade-up" className="secContent grid">
        {filteredData.map(
          ({ id, imgSrc, Name, location, type, budget, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="First">
                <div className="Divimg">
                  <img data-aos="fade-down" src={imgSrc} alt="Img Not Found" />
                </div>

                <div className="cardinfo">
                  <h4 data-aos="fade-right" className="destitle">{Name}</h4>
                  <span data-aos="fade-right" className="continent flex">
                    <GrLocation className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {type} <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>Total Expensive {budget}</h5>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="desc">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Main;
