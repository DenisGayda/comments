import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import Firebase from 'firebase';

var config = {
	apiKey: "4peqEwd7eKJnTcz0AEDJ80iRwJYiXHREG9rAAXVi",
	databaseURL: "https://react-246cf.firebaseio.com"
}

Firebase.initializeApp(config);

class CommentBox extends React.Component {
	render() {
		return (
			<div className="comments-box">
				<CommentForm />
				<CommentList />
			</div>
		);
	}
}

ReactDOM.render(<CommentBox />, document.getElementById('app'));