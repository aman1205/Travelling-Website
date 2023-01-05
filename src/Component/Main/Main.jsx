import React from "react";
import { GrLocation } from "react-icons/gr";
import main from "../images/main.jpg";
import "./Test.css";

function Main() {
  const data = [
    {
      id: 1,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 2,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 3,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 4,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 5,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 6,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 7,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 8,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 9,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 10,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 12,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 13,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 14,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 15,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 16,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 17,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of ,the ocean buried",
    },
    {
      id: 18,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 19,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 20,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 21,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 22,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 23,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 24,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 25,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 26,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 27,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 28,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 29,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
    {
      id: 30,
      imgSrc: main,
      Name: "Noida",
      location: "Uttar Pradesh",
      type: "Forest",
      budget: "5000",
      description:
        "Now is the winter of our disconten  Made glorious summer by this sun of York And all the clouds that lour d upon our house  In the deep bosom of the ocean buried",
    },
  ];
  return (
    <section className="point container section">
      <div className="sectitle">
        <h3 className="title">Top Place Visited</h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, Name, location, type, budget, description }) => {
            return (
              <div key={id} className="First">
                <div className="Divimg">
                  <img src={imgSrc} alt="Img Not Found" />
                </div>

                <div className="cardinfo">
                  <h4 className="destitle">{Name}</h4>
                  <span className="continent flex">
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
                      <h5>{budget}</h5>
                    </div>
                  </div>
                  <div className="desc">
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
