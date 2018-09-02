import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
import registerServiceWorker from './registerServiceWorker';


class Root extends React.Component {
	render(){
		return(
			 <BrowserRouter>
	    		<App />
	 		 </BrowserRouter>
 		 )
	}
		 
}
ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
