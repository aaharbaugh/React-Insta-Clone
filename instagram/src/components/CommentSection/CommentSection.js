import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

export default function CommentSection(props) {

    return (
        <div className="comment-section">
            <span className="comment-username">{props.data.username}</span>
            <span className="comment-text">{props.data.text}</span>
        </div>
    )
}