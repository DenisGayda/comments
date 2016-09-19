import React from 'react';

export default class CommentCount extends React.Component {
	_getCountTitle(arg) {
		if (arg === 0) {
			return 'No comments yet'
		} else if (arg === 1) {
			return '1 comment'
		} else {
			return `${arg} comments`
		}
	}

	render() {
		return (
			<div className="comments-title">{this._getCountTitle(this.props.count)}</div>
		)
	}
}