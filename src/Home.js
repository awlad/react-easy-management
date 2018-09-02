import React from 'react';
import LoginForm from './LoginForm';
import {isLoggedIn} from './auth/auth.js';
import  { Redirect } from 'react-router-dom';

const Home = () => {
  	if(!isLoggedIn()){
  		return (
		    <div className="container">
		      <LoginForm />
		    </div>
	    )
	}
	else{
		return (
			<Redirect to='/dashboard' />
	    )
	}
  
}
export default Home;