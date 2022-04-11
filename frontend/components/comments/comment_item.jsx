import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class CommentItem extends React.Component {

    render () {

        
        
        
        if (!this.props.comments) { return null }
        
        const { comments, currentUser, deleteComment } = this.props;
        
        return (
            <div className="comments-index-container">
                <ul className='list'>
                    {
                        this.props.comments.map((comment, i) => (
                            <li key={i}>
                                <div className="comment-obj-container">
                                    <div className="comment-obj">
                                        <Link to={`/users/${comment.commenter_id}`}><img className="comment-profile-pic" alt=''/></Link>
                                        <div className="comment-body">
                                            <Link className="comment-commenter-username" to={`/users/${comment.commenter_id}`}>{this.props.users[comment.commenter_id]}</Link>
                                            {/* <Link className="comment-commenter-username" to={`/users/${comment.commenter_id}`}>{users[comment.commenter_id].email.slice(0, users[comment.commenter_id].email.indexOf('@'))}</Link> */}
                                            <div className="comment-body-text">{comment.body}</div>
                                        </div>
                                    </div>

                                    <div className="comment-obj-right">

                                    {
                                        (currentUser.id === comment.commenter_id) ? (
                                            <button className="delete-comment-btn"
                                                onClick={() => deleteComment(comment.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        ) : null
                                    }

                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default CommentItem;

