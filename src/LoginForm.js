import React, {Component } from 'react';
import {login} from './auth/auth.js';
import './App.css';

class LoginForm extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      email: "",
	      password: ""
	    };
  	}

	  validateForm() {
	    return this.state.email.length > 0 && this.state.password.length > 0;
	  }

	  handleChange = event => {
	    this.setState({
	      [event.target.id]: event.target.value
	    });
	  }

	  handleSubmit = event => {
	    event.preventDefault();
	    const data = this.state;
	    login(data);
	  }

	  render() {
	    return (
	    	<div className="row">
		      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
		        <div className="card card-signin my-5">
		          <div className="card-body">
		            <h5 className="card-title text-center">Sign In</h5>
		            <form className="form-signin" onSubmit={this.handleSubmit}>
		              <div className="form-label-group">
		                <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus value={this.state.email}  onChange={this.handleChange}/>
		                <label htmlFor="email">Email address</label>
		              </div>

		              <div className="form-label-group">
		                <input type="password" id="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handleChange}/>
		                <label htmlFor="password">Password</label>
		              </div>

		              <div className="custom-control custom-checkbox mb-3">
		                <input type="checkbox" className="custom-control-input" id="customCheck1" />
		                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
		              </div>
		              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" disabled={!this.validateForm()}>Sign in</button>
		              <hr className="my-4" />
		            </form>
		          </div>
		        </div>
		      </div>
	    	</div>
	    );
	  }
}

export default LoginForm;
