import React from 'react';

import CommentSection from "../CommentSection/CommentSection";

export default function PostContainer(props) {

    return (
        <div className="post-container">
            {props.data.username}
            {props.data.comments.map(comment => {
                return <CommentSection data={comment} />
            })}    
        </div>
    )
}
