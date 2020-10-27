import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import React from 'react';
import '../index.css';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends React.Component {
    render() {
      return (
        <div id="RegistrationPage">
        <RegistrationForm />
      </div>
      )
    }

}


export default RegistrationPage;
