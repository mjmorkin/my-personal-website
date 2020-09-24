
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HomePage extends React.Component {
  render() {
	return (
    <div>
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
    </div>
  );
  }
}

  class Features extends React.Component {
    render() {
      return (
        <div>
          <h3 classname="feats">List of features</h3>
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
        <div>
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

  class Food extends React.Component {
   render() {
     return (
       <div>
         <table classname="tables">
           <tr>
             <th>#</th>
             <th>Food</th>
             <th>Drink</th>
           </tr>
           <tr>
             <td>1</td>
             <td>Pizza</td>
             <td>Soda</td>
           </tr>
           <tr>
             <td>2</td>
             <td>Hot dog</td>
             <td>Water</td>
           </tr>
         </table>
       </div>
     );
   }
  }

// ========================================

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
);
