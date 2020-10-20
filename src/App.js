import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { Route } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './registration/Registration';

const App = () => {
  return (
    <section className="App">
      <Router>
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </section>
  );
};
export default App;
