import React, { Component } from 'react';
import './App.css';
import {isLoggedIn} from './auth/auth.js';
import history from './history';
import Lists from './Lists';


class Dashboard extends Component {
  render() {
    if(isLoggedIn()){
      return (
        <div className="App">
          You are in dashboard
          < Lists />
        </div>
      );
  }
  else {
    return (
      history.push('/')
    )
  }
  }
}

export default Dashboard;
