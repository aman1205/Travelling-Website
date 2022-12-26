import React from 'react'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import  './home.css'
function Home() {
  return (
    <section className='home'>
        <div className="overlay"> </div>
        <video src="Goa/vedio.mp4" muted autoPlay loop typeof='vedio/mp4'></video>

        <div className="homecontent container">
          <div className="textdiv">
            <span className="smalltext">
              Your Budget
            </span>
            <h1 className="hometitle">
              Search your Place
            </h1>
          </div>
        <div className="carddiv grid">
          <div className="destinationinput">
            <label htmlFor="city">Search For Place</label>
            <div className="input flex">
              <input type="text" placeholder='Enter the name here'/>
               <GrLocation className="icon"/>
            </div>
          </div>

          <div className="dateinput">
            <label htmlFor="city">Select Date</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>
          
          <div className="priceinput">
            <div className='label_total flex'>
              <label htmlFor="price">Max Budget:</label>
              <h3 className='total'>15000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="15000" min="5000" />
            </div>
          </div>
          <div className="searchoption flex">
             <HiFilter className='icon'/>
             <span>More Filter</span>
+
          </div>

        </div>

        </div>
 
    </section>
  )
}

export default Home
