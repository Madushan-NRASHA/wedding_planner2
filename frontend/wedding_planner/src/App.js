import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/homePage';
import About from './pages/About';
import Works from './pages/Works';

const TextBox = () => (
  <div className="textBox">
    {/* Content for the text box */}
  </div>
);

const BackgroundAnimation = () => {
  const numberOfColorBoxes = 400;
  const colorBoxes = Array.from({ length: numberOfColorBoxes }, (_, i) => <div key={i} className="colorBox" />);

  return (
    <div className="bgAnimation">
      <div className="backgroundAmim"></div>
      {colorBoxes}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <BackgroundAnimation />
        <div className="navbar">
          <h1><span>Wedding</span>Hub</h1>
          <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> {/* Change Link to /about */}
            <li><Link to="/profile">My Works</Link></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page at root */}
          <Route path="/about" element={<About />} /> {/* About page at /about */}
          <Route path="/profile" element={<Works/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
