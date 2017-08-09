import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Got Secrets?</h1>
        <p>Your Trapper-Keeper&trade; for secrets. Sign up today. It's easy, free, and about as reliable as somebody you sort of trust!</p>
        <hr></hr>
        <p className="w3-opacity">Create an account to get started, or log back in if you're already a Secret Keeper.</p>
        <Link to="/signup"><button className="w3-btn w3-ripple w3-blue homepage-button" type="button">Sign Up</button></Link>
        <Link to="/login"><button className="w3-btn w3-ripple w3-green homepage-button" type="button">Log In</button></Link>
      </div>
    );
  }
}

export default App;
