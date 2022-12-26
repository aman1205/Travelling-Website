import React from 'react';
import "./App.css"
import Navbar from './Component/Nav/Navbar';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Main/>
    </div>
  );
}

export default App;
