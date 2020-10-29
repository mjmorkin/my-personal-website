import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import { Route } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import RegistrationPage from './registration/Registration';
import RegistrationAlerts from '../src/RegistrationAlerts';

function App () {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);
  return (
      <Router>
        <Switch>
          <Route exact path="/registration">
            <RegistrationPage showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route exact path="/">
            <HomePage ></HomePage>
          </Route>
        </Switch>
        <RegistrationAlerts errorMessage={errorMessage} hideError={updateErrorMessage} />
      </Router>
  );
};
export default App;
