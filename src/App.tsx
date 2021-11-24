import { Component, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Details from './components/details/Details';
import Overview from './components/overview/Overview';

class App extends Component {
  render(): ReactElement {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
