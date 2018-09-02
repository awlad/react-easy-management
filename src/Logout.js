import React, {Component } from 'react';
import {logout} from './auth/auth.js';
import  { Redirect } from 'react-router-dom';

class LoginOut extends Component {
	constructor(props) {
	    super(props);
	    logout();
  	}


  render() {
    return (
    	<Redirect to='/' />
    );
  }
}

export default LoginOut;
