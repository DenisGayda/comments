import React from 'react';
import Firebase from 'firebase';

export default class CommentList extends React.Component {
	_removeComment(currentId, e) {
        e.preventDefault();
        if (confirm('Are you really sure to remove this awesome component?')) {
            Firebase.database().ref().child('comments').child(currentId).remove();
        }  
    }
    render() {
		return (
			<li className="comments-item">
                <h3>
                    {this.props.name}
                    <a href="#" onClick={this._removeComment.bind(this, this.props.id)}>delete</a>
                </h3>
                <p>{this.props.text}</p>
            </li>
		);
	}
}