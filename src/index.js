
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HomePage extends React.Component {
  render() {
	return (
    <div>
      <EspnButton />
      <Introduction />
      <Features />
      <Sport/>
    	<Food />
    </div>
	);
  }
}

class Introduction extends React.Component {
  render() {
	return (
    <div>
      <h1 className="header"> Micheal's website</h1>
      <p className="about"> I am interested in learning how to
         design mulitple different types of apps and websites. I want
          to learn security <b>measures</b> like how to login and have a user
          protected account that would encrypt sensitive information like
          their password. I would like to learn how to make reactive
          (mouse or finger) apps and buttons. </p>
        <img src="images/pic1.jpg" width="200" height="150" alt="Mountain Reflecting on Water"></img>
    </div>
    );
  }
}

  class Features extends React.Component {
    render() {
      return (
        <div id="feature">
          <h3>List of features</h3>
          <ul>
            <li>user log in</li>
            <li>how to handle user input</li>
            <li>....</li>
          </ul>
        </div>
      );
    }
  }

  class Sport extends React.Component {
    render() {
      return (
        <div id="sport">
          <h3 className="teams">Favorite sports teams</h3>
          <ol>
            <li>Bears</li>
            <li>Blackhawks</li>
            <li>Bulls</li>
            <li>...</li>
          </ol>
        </div>
      );
    }
  }

  function snacks(element){
    var elements = ["Pizza", "Mac & Cheese", "Burger", "Ice Cream"];
    var returnElement = elements[element];
    return (<td value={returnElement}>{returnElement}</td>);
  }
  class Food extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        favs: ["Pizza", "Mac & Cheese", "Burger", "Ice Cream"]
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
        <table id="foods">
          <tr>
            <th>#</th>
            <th>Favorite Foods</th>
          </tr>
          {this.renderElement(1)}
          {this.renderElement(2)}
          {this.renderElement(3)}
          {this.renderElement(4)}
        </table>
      );
  }
  render() {
    return(
      <div class="eat">
        <p>Here is a list of some foods</p>
        <div className="tableElement">
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

/*
*go to espn/google button
*/
  class EspnButton extends React.Component {
    render() {
      return (
      <div>
        <a href="https://espn.com" class="button">Go to Espn</a>
      </div>
      );
    }
  }

// ========================================

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
