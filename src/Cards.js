import React, {Component } from 'react';
import Card from './Card.js';

class Cards extends Component {
	
	render() {
		console.log('props',this.props.ab);
		if(this.porps && this.porps.cards !== 'undefined' && this.porps.cards.lengh > 0){
			const cards = this.porps.cards;
			console.log('cards inside',cards);
		
			return (
					<div className="row cards">
						{cards.map(card =>
				            <Card card={card} key={card.id}/>
				        )}
					</div>
				);
		}
		else {
			return <h3> no Cards </h3>
		}
	}
}

export default Cards;
