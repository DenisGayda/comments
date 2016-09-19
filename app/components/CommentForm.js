import React from 'react';
import Firebase from 'firebase';

export default class CommentForm extends React.Component {
    _sendComment(e) {
        e.preventDefault();
        let nameComment = this.refs.name.value;
        let textComment = this.refs.text.value;
        if (nameComment.length && textComment.length) {
            Firebase.database().ref().child('comments').push({
                name: nameComment,
                text: textComment
            }).then(() => {
                this.refs.name.value = '';
                this.refs.text.value = '';
            });
        }
    }
    render() {
		return (
			 <form className="comments-form" onSubmit={this._sendComment.bind(this)}>
                <label htmlFor="name">Name</label>
                <input type="text" ref="name" id="name" name="name" />
                <label htmlFor="text">Comment</label>
                <textarea ref="text" name="text" id="text"></textarea>
                <input type="submit" value="post commit" />
            </form>
		);
	}
}