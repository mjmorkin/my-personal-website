import React, {useState} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { useHistory } from "react-router-dom";

function RegistrationForm(props) {
  const [state , setState] = useState({
    firstName: "",
    lastName: "",
    email : "",
    username : "",
    password : "",
    passwordConf : ""
})
    const handleChange = (e) => {
      const {id , value} = e.target
      setState(prevState => ({
        ...prevState,
        [id] : value
      }))
    }

    const handleSubmitClick = (e) => {
      e.preventDefault();
      if(validation()){
        redirectToHome();
      }
    }

    const history = useHistory();

    const redirectToHome = () => {
       history.push('/');
   }
   const validation = () => {
     firstNameValid();
     lastNameValid();
     emailValid();
     usernameValid();
     passwordValid();
     return passwordConfValid();

   }

//const validations
   const firstNameValid = () => {
     if(state.firstName==""){

//add danger alert do not push through
     }
   }
   const lastNameValid = () => {
     if(state.lastName==""){

//add danger alert do not push through
     }
   }
   const emailValid = () => {
     if(state.email==""){

//add danger alert do not push through
     }
   }
   const usernameValid = () => {
     if(state.username==""){

//add danger alert do not push through
     }
   }
   const passwordValid = () => {
     if(state.password!=""){

//add danger alert do not push through
     }
   }
   const passwordConfValid = () => {
     if(state.passwordConf!=state.password){
       return (false);
//add danger alert do not push through
     }
     return (true);
   }

return(
  <div className="container-fluid" id="regback">
  <span className="col"><a href="/">Home Page</a></span>
    <h1 id="reqhead">Registration Page</h1>
    <p id="req">Fields Marked With * Are Required</p>
      <form action="">
      <div class="form-group">
        <label for="firstName">First Name: *</label>
        <input class="form-control" type="firstName" id="firstName" pattern="^[a-zA-Z]+" placeholder="John" onChange={handleChange} required />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name: *</label>
        <input class="form-control" type="lastName" id="lastName" pattern="^[a-zA-Z]+" placeholder="Doe" onChange={handleChange} required />
      </div>
      <div class="form-group">
        <label for="email">Email: *</label>
        <input class="form-control" type="email" id="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$" placeholder="John@company.com" required />
      </div>
      <div class="form-group">
        <label for="username">Username: *</label>
        <input class="form-control" type="username" id="username" pattern="^[a-zA-Z0-9]{3,12}$" placeholder="John123" required />
      </div>
      <div class="form-group">
        <label for="password">Password: *</label>
        <input class="form-control" type="password" id="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]){6,}$" required />
      <p id="directions">Password must be atleast 8 characters and include atleast one (1) capital letter, lowercase letter, number, and special character(#?!@$%^&*-)</p>
    </div>
      <div class="form-group">
        <label for="passwordConf">Re-Type Password: *</label>
        <input class="form-control" type="password" id="passwordConf" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]){6,}$" required />
      </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Create Account</button>
      </form>
  </div>
)
}
 export default RegistrationForm;
