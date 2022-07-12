import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <Education/>
    </div>
  );
}

export default App;
