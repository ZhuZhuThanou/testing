import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  render() {
    return (
    <div>
      <h2>Login screen</h2>
      <Link to='/'><h3>Hone</h3></Link>
    </div>
    )
  }
}

export default Login;