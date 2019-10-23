import React from 'react';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  showHiddenTextOnHover({ target }) {
    let commentContent = target.nextSibling.childNodes;
    for (let element of commentContent) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      }
    };
  }
  hideHiddenTextAfterHover({ target, currentTarget }) {
    let commentContent = target.nextSibling.childNodes;
    for (let element of commentContent) {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
    };
  }

  render() {
    return (
      <div className="comment" z-index={this.props.zIndex} >
        <img src={this.props.comment.avatar} onMouseEnter={(event) => this.showHiddenTextOnHover(event)} onMouseOut={(event) => this.hideHiddenTextAfterHover(event)} />
        <div className="comment-comment-container">
          <div className="hidden comment-sub-content comment-username">{this.props.comment.username}</div>
            
          <div className="hidden comment-sub-content comment-text"><em className="space">__</em>{this.props.comment.text}</div>
        </div>
      </div>
    );
  };
};
