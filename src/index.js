import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HomePage extends React.Component {
  render() {
	return (
    <div>
      <Header />
      <Introduction />
    <div class="row" id="mid">
      <div class="col-md-5"><Elements /><EspnButton /></div>
      <div class="col-md-3"><Food /></div>
      <div class="col-md-4"><Sport/></div>
    </div>
      <Footer />
    </div>
	);
  }
}

class Introduction extends React.Component {
  render() {
	return (
    <div class="container-fluid" id="intro">
      <h1 className="header"> Micheal's website</h1>
    <div class="row">
      <div class="col-md-6">
        <p className="about"> I am interested in learning how to
         design mulitple different types of apps and websites. I want
          to learn security measures like how to login and have a user
          protected account that would encrypt sensitive information like
          their password. I would like to learn how to make reactive
          (mouse or finger) apps and buttons. </p></div>
        <div class="col-md-3">
          <img src="images/pic1.jpg" class="rounded-circle" width="200" height="150" alt="Mountain Reflecting on Water"></img></div>
    </div>
  </div>
    );
  }
}

  class Food extends React.Component {
    render() {
      return (
        <div class="container">
          <h3 id="food">List of foods</h3>
          <ul>
            <li>pizza</li>
            <li>cheese</li>
            <li>cake</li>
          </ul>
        </div>
      );
    }
  }

  class Sport extends React.Component {
    render() {
      return (
        <div class="container">
          <h3 id="sport">Favorite sports teams</h3>
          <ol className="teams">
            <li>Bears</li>
            <li>Blackhawks</li>
            <li>Bulls</li>
            <li>...</li>
          </ol>
        </div>
      );
    }
  }

  function implement(element){
    var elements = ["Login/account setup", "Fantasy team", "Market", "MyEbay", "Email"];
    var returnElement = elements[element];
    return (<td value={returnElement}>{returnElement}</td>);
  }
  class Elements extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        favs: ["Login/account setup", "fantasy team", "Market", "MyEbay", "Email"]
      };
    }
   renderElement(i) {
     return (
           <tr>
             <td>{i}</td>
             <td value={this.state.favs[i-1]}>{this.state.favs[i-1]}</td>
           </tr>
     );
  }
  renderTable() {
      return(
        <table id="elem">
          <tr>
            <th>#</th>
            <th>Implement Elements</th>
          </tr>
          {this.renderElement(1)}
          {this.renderElement(2)}
          {this.renderElement(3)}
          {this.renderElement(4)}
          {this.renderElement(5)}
        </table>
      );
  }
  render() {
    return(
      <div class="container" id="table-striped">
        <p id="thead">Here is a list of some elements</p>
        <div className="table">
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

  class EspnButton extends React.Component {
    render() {
      return (
      <div class="container">
        <a href="https://espn.com" class="button">Go to Espn</a>
      </div>
      );
    }
  }

  class Footer extends React.Component {
    render() {
      return (
        <div class="row" id="foot">
          <div class="col-md-4">Copyright (C) Michael Morkin</div>
          <div class="col-md-4">Phone: (708)497-0596</div>
          <div class="col-md-4">Email: <a href="">michaeljmorkin@gmail.com</a></div>
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
