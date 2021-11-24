import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.scss';
import Details from './components/details/Details';
import Overview from './components/overview/Overview';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
