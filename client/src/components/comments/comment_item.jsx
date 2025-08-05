import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';

function timeAgo(dateString) {
    const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };
    for (let unit in intervals) {
        const interval = Math.floor(seconds / intervals[unit]);
        if (interval >= 1) return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
    return "just now";
}

class CommentItem extends React.Component {
    render() {
    const { comment, currentUser, deleteComment } = this.props;
    if (!comment) return null;

    const commenterName = comment.commenter_username || 'unknown';
    const timePosted = timeAgo(comment.created_at);

    return (
      <li>
        <div className="comment-obj-container">
          <div className="comment-obj">
            <Link to={`/users/${comment.commenter_id}`}>
              <img className="comment-profile-pic" alt='' />
            </Link>

            <div className="comment-body-wrapper">
              <div className="comment-meta">
                <Link 
                  className="comment-commenter-username" 
                  to={`/users/${comment.commenter_id}`}>
                  @{commenterName}
                </Link>
                <span className="comment-time"> - {timePosted}</span>
              </div>
              <div className="comment-body-text">
                {comment.body}
              </div>
            </div>
          </div>

          {currentUser?.id === comment.commenter_id && (
            <div className="comment-obj-right">
              <button onClick={() => deleteComment(comment.id)}>
                <FaTrash size={18} color="red" />
              </button>
            </div>
          )}
        </div>
      </li>
    );
  }
}

export default CommentItem;