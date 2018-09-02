import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard';
import Lists from './Lists';
import Cards from './Cards';
import Comments from './Comments.js';
import Logout from './Logout';
import {requireLogin} from './auth/auth.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/lists/:id/cards' component={Cards}/>
      <Route exact path="/lists/:id/comments" component={Comments} />
      <Route exact path="/logout" component={Logout}/>
      <Route exact path='/dashboard' component={Dashboard} onEnter={requireLogin} />
       <Route exact path='/lists' component={Lists} onEnter={requireLogin}/>
    </Switch>
  </main>
)

export default Main;
