import React from 'react'
import { Link } from 'react-router-dom';
import {isLoggedIn} from './auth/auth.js';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => {
  if(isLoggedIn()){
  	return(
  		<header>
	  		<nav className="navbar navbar-expand-sm bg-light justify-content-center">
			  <ul className="navbar-nav">
			  	<li className="nav-item"><Link className='nav-link' to='/logout'>Logout</Link></li>
			  	<li className="nav-item"><Link className='nav-link' to='/dashboard'>Dashboard</Link></li>
			  	<li className="nav-item"><Link className='nav-link' to='/lists'>Lists</Link></li>
	 		  </ul>
			</nav>
		</header>
		)
   }
   else {
   	return(
	   	<header>
	  		<nav className="navbar navbar-expand-sm bg-light justify-content-center">
			  <ul className="navbar-nav">
				<li className="nav-item"><Link className='nav-link' to='/'>Login</Link></li>
			  </ul>
		    </nav>
		</header>
		)
   }   
}

export default Header;
