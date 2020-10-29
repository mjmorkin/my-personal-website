import React from 'react';
import { Route, Link } from 'react-router-dom';
function Header() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid" id="head">
            <button data-toggle="collapse" data-target="#demo">Collapsible</button>
            <span className="col"><Link to="/registration">Create Account</Link></span>
            <span className="col"><a href="https://fantasy.espn.com/football/team?leagueId=550397&teamId=4">Fantasy Team</a></span>
            <span className="col"><a href="">Market</a></span>
            <span className="col"><a href="">MyEbay</a></span>
            <span className="col"><a href="">Email</a></span>
          </div>
        </nav>
    )
}
export default Header;
