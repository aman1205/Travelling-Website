import React,{useState} from 'react'
import "./Navbar.css"
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
export default function Navbar() {
    const[data, setdata]=useState('navbar')
    const showNav=()=>{
        setdata('navbar datanavbar')
    }
    const closeNav=()=>{
        setdata('navbar')
    }

  return (
    <section className='navsectionn'>
        <header className="header flex">
            <div className="logodiv">
                <a href="index.html" className='logo'><h1 ><MdOutlineTravelExplore className="icon"/>Tremendous Trip</h1></a>
            </div>

            <div className={data}>
                <ul className="navlist flex">
                    <li className="navitem">
                        <a href="index.html" className="navlink">Home</a>
                    </li>
                    <li className="navitem">
                        <a href="index.html" className="navlink">Blog</a>
                    </li>
                    <li className="navitem">
                        <a href="index.html" className="navlink">About</a>
                    </li>
                    <li className="navitem">
                        <a href="index.html" className="navlink">Any</a>
                    </li>
                    <li className="navitem">
                        <a href="index.html" className="navlink">Contact</a>
                    </li>
                    <button className='btn'>
                        <a href="index.html">Visit-US</a>
                    </button>
                </ul>

                <div onClick={closeNav} className="closenavbar">
                   <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="togglenavbar">
                <AiOutlineMenu className="icon"/>
            </div>
        </header>

    </section>
  )
}
