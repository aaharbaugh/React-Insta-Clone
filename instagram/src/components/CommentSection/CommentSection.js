import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

export default function CommentSection(props) {

    return (
        <div className="comment-section">
            {props.data.username}
            {props.data.text}
        </div>
    )
}