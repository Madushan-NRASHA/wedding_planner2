import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/homePage';
// import Profile from './pages/myWork';
// import About from './pages/about_us';
// import AdminAcc from './Admin_Acc/adminSettings_Acc';
// import AddNew_data from './Add_data/addNew_data';
// import ShowData from './ShowAdmin_data/showAdminData';
// import Contact_us from './Contactus/contactus';

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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">My Works</Link></li>
          </ul>
        </div>

       
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userAcc" element={<AdminAcc />} />
          <Route path="/Add_project" element={<AddNew_data />} />
          <Route path="/Show_projects" element={<ShowData />} />
          <Route path="/contact-us" element={<Contact_us />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
