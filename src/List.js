import React, {Component } from 'react';
import {loader} from './loader/Loader.js';
import Cards from './Cards.js';

class List extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      cards: null,
	      ab: 'abc'
	    };
  	}

	componentDidMount() {
		var self = this;
		loader.get('/lists/'+ this.props.list.id)
            .then(response => {
                self.setState({cards:  response.data.cards, ab: '123'});
            }).catch(function (error) {
		  		alert(error.message);
 			})
	}

	render() {
		if(this.props.list && this.state.cards !== null){
			const list = this.props.list;
			const cards = this.state.cards;
			console.log('cards', cards);
			return (
					<div className="card list">
					  
					  <div className="card-body">
					    <h5 className="card-title">{list.title}</h5>
					    <div className="row inner-cards">	
					    	<Cards cards={this.state.cards} abc='123' ab={this.state.ab} key={list.id}/>
					   	</div>
					   </div>
					 </div>
				);
		}
		else {
			return <h3> no data </h3>
		}
	}
}

export default List;
