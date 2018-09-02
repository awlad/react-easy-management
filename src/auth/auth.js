/*
User authentication related functionality
*/
import axios from 'axios';
// import { browserHistory } from 'react-router'
// import history from './../history';

const ACCESS_TOKEN_KEY = 'token_key';
const TOKEN_EXPIRE_AT = 'expire';

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getTokenExpireTime() {
  return localStorage.getItem(TOKEN_EXPIRE_AT);
}

// Get and store access_token in local storage
export function setAccessToken(tokenResponse) {
  localStorage.setItem(ACCESS_TOKEN_KEY, tokenResponse.auth_token);
  localStorage.setItem(TOKEN_EXPIRE_AT, tokenResponse.expire_at);
}

export function isLoggedIn() {
  return getAccessToken() && !isTokenExpired();
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRE_AT);
  console.log("getAccessToken", getAccessToken());
  console.log("isTokenExpired", getTokenExpireTime());
}

function isTokenExpired() {
  return getTokenExpireTime() < new Date();
}

export function login(credential) {
 axios.post(`http://localhost:3001/api/v1/login`, credential)
      .then(res => {
        var d = new Date();
		    var v = new Date();
		    v.setMinutes(d.getMinutes() + 50);
        res.data.expire_at = v;
        setAccessToken(res.data);
        // history.push('/dashboard');
        window.location = '/dashboard';
      }).catch(function (error) {
		  alert(error.message);
 		})
}

export function logout() {
  clearAccessToken();
  // history.push('/');
  window.location = '/';
}

export function requireLogin(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}
