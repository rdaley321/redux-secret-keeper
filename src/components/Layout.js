import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/App.css';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="w3-bar w3-border w3-black w3-large">
            <img className="w3-bar-item" src="https://sc.mogicons.com/l/keeping-secret-253.png" alt="logo" />
            <li className="w3-bar-item nav-text"><Link to="/">Secret Keeper</Link></li>
            <li className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right"><Link to="#">Log In</Link></li>
            <li className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white w3-right"><Link to="#">Sign Up</Link></li>
          </ul>
        </nav>
        <div id="bg">
          <img src="http://www.outdoor-photos.com/_photo/1574993.jpg" alt="background" />
        </div>
        <div className="w3-container w3-red w3-margin-right w3-margin-left div-children">
          {this.props.children}
        </div>
      </div>
    )
  }
}
