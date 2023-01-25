import React from 'react';
import "./App.css"
import Navbar from './Component/Nav/Navbar';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Blog from './Component/Nav/Blog';
import Contact from './Component/Nav/Contact';
import { useState } from 'react';
import {BrowserRouter ,Routes, Route } from 'react-router-dom';


const App = () =>{
  const [value, setValue] = useState(0);

  return (
    
  <>
    <Navbar/>
    <Home value={value} setValue={setValue} />
    <Main value={value} />
    
  </> 
      
       
        
    
      

      

    
  );
}

export default App;
