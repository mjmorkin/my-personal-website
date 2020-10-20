import React from 'react';
function Header() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid" id="head">
            <span className="col"><a href="/">Home Page</a></span>
            <span className="col"><a href="/registration">Account Setup</a></span>
            <span className="col"><a href=""> Fantasy Team</a></span>
            <span className="col"><a href="">Market</a></span>
            <span className="col"><a href="">MyEbay</a></span>
            <span className="col"><a href="">Email</a></span>
          </div>
        </nav>
    )
}
export default Header;
