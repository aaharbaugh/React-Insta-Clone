import React, {Component} from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class CommentSection extends Component {
    constructor(props){
        super();

        this.state = {
            data: props.data,
            time: props.time
        }
    }

    render() {
        return (
            <>
                {this.state.data.map((comment, index) => {
                    return <div className="comment-section" key={comment.text}>
                        <span className="comment-username">{comment.username}</span>
                        <span className="comment-text">{comment.text}</span>
                    </div>
            })}
                   
                <div className="post-footer-container">
                    <div className="footer-time"><Moment fromNow>{this.state.time.timestamp}</Moment></div>
                    <input className="footer-comment-input" type="text" placeholder="Add a comment..." />
                </div>
            </>
    )};
}

export default CommentSection;