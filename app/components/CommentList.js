import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import CommentItem from './CommentItem.js';
import CommentCount from './CommentCount.js';
import CommentToggle from './CommentToggle.js';
import Firebase from 'firebase';


export default class CommentList extends React.Component {
	constructor() {
		super();
		this.state = {
			showComments: true,
			comments: []
		}
	}

	componentDidMount() {
		this.bindAsArray(Firebase.database().ref().child('comments'), 'comments'); 
	}

	_toggleComments() {
		this.setState({
			showComments: !this.state.showComments
		})
	}

	render() {
		
		const commentsLength = this.state.comments.length
		let commentList

		if (commentsLength && this.state.showComments) {
			commentList =  <ul className="comments-list">
                {
                	this.state.comments.map((obj, index) => {
                		return	<CommentItem id={obj['.key']} key={index} name={obj.name} text={obj.text} />
                	})
                }
                </ul>
		}
		return (
			<div className="comments-body">

				<CommentCount count={commentsLength} />
               	<CommentToggle toggleComments={this._toggleComments.bind(this)} showComments={this.state.showComments} />
               {commentList}
            </div>
		);
	}
}

ReactMixin(CommentList.prototype, ReactFire);