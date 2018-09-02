import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {

	render() {
		if(this.props.comment){
			const list = this.props.comment;
			return (
					<div className="card">
					  
					  <div className="card-body">
					    <h5 className="card-title">{list.title}</h5>
					    <p className="card-text">{list.description}</p>
					    <Link className="btn btn-primary" to={`/lists/${list.id}/comments`}>comments</Link>
					   </div>
					 </div>
				);
		}
		else {
			return <h3> no data </h3>
		}
	}
}

export default Card;
