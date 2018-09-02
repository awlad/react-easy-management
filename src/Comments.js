import React, {Component } from 'react';
import {loader} from './loader/Loader.js';
import Comment from './Comment.js';

class Comments extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      comments: null,
	    };
  	}

	componentDidMount() {
		var self = this;
		loader.get('/lists/'+ this.props.match.params.id)
            .then(response => {
            	console.log('bbbbb', response.data);
                self.setState({comments:  response.data.cards});
                console.log('dsdasdasdd',self.state.comments);
            }).catch(function (error) {
		  		alert(error.message);
 			})
	}

	render() {
		const a = this.state.comments;
		if(this.state.comments){
			return (
					<div className="row cards">
						{this.state.comments.map(comment =>
				            <Comment comment={comment} key={comment.id}/>
				        )}
					</div>
				
			);
		}
		else {
			return <h3> no comments </h3>
		}
	}
}

export default Comments;
