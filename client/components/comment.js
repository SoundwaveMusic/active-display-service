import React from 'react';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment" z-index={this.props.zIndex}>
        <img src={this.props.comment.avatar} />
        <div className="hidden comment-username">{this.props.comment.username}</div>
        <div className="hidden comment-text">{this.props.comment.text}</div>
      </div>
    );
  };
};
