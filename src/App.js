import React from 'react';
import "./App.css"
import Navbar from './Component/Nav/Navbar';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Blog from './Component/Blog/Blog';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      {/* <Router>
      <Routes> 
        <Route  path={ Blog>} element={<FetchApi changes="general"/> }/>
        <Route  path="/sport" element={<FetchApi changes="sport"/> }/>
        <Route  path="/technology" element={<FetchApi changes="technology"/> }/>
        <Route  path="/business" element={<FetchApi changes="business"/> }/>
        <Route  path="/health" element={<FetchApi changes="business"/> }/> 
       </Routes>
      <Main/>
     </Router>  */}
    </>
  ); 
}

export default App;
