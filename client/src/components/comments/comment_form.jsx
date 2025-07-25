import React from "react";

class CommentForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            ...this.props.comment
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit (e) {
        e.preventDefault();
            
        const comment = {
            body: this.state.body,
            track_id: this.state.track_id

        };

        this.props.createComment(comment).then(() => {
            this.setState({ body: "" }); // ✅ this works now
        });
    };

    render () {


        const { currentUser } = this.props;

        return (
            <div className="comment-form-container">
                <div className='image-container'><img className="comment-form-profile-pic" alt=''/></div>

                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" 
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Write a comment"
                    />
                </form>

            </div>
        )
    }
};

export default CommentForm;