import React from 'react';

export default class CommentToggle extends React.Component {
	
	render() {
		return (
			 <button className="button" onClick={this.props.toggleComments}>{this.props.showComments ? 'hide comments' : 'show comments'}</button>
		)
	}
}