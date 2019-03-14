import React from 'react';

export default function CommentSection(props) {

    return (
        <div className="comment-section">
            {props.data.username}
            {props.data.text}
        </div>
    )
}