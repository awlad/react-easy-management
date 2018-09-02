import React, {Component } from 'react';
import {loader} from './loader/Loader.js';
import List from './List';

class Lists extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      lists: null,
	    };
  	}

	componentDidMount() {
		var self = this;
		loader.get('/lists')
            .then(response => {
                self.setState({lists:  response.data});
            }).catch(function (error) {
		  		alert(error.message);
 			})
	}

	render() {
		if(this.state.lists){
			return (
					<div className="row lists">
						{this.state.lists.map(list =>
				            <List list={list} key={list.id}/>
				        )}
					</div>
				
			);
		}
		else {
			return <h3> no data </h3>
		}
	}
}

export default Lists;
