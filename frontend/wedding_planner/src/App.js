import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <div>
    <div className="navbar">
      <h1>Wedding planner</h1>
      <ul className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About-us</Link></li>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/">Contact-us</Link></li>
      </ul>
    </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
