import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import NotFound from './components/NotFound.js';
import './App.css'

function App() {
  return (
    <div className='App'>
      <div class="custom-shape-divider-top-1689831164">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className='App_Container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>  
    </div>
  );
}

export default App; 
