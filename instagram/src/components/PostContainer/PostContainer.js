import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';





import CommentSection from "../CommentSection/CommentSection";

export default function PostContainer(props) {

    return (
        <div className="post-container">

            <div className="post-user-container">
                <img className="thumbnail" src={props.data.thumbnailUrl} alt={props.data.username}/>
                <span>{props.data.username}</span>
            </div>

            <div className="post-image-container">
                <img className="image" src={props.data.imageUrl} alt={props.data.username}/>
            </div>

            <div className="post-comments-container">
                <CommentSection data={props.data.comments} time={props.data.timestamp} likes={props.data.likes}/>
 
            </div>

            

        </div>
    )
};

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}