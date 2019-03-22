import React from 'react';

import PropTypes from 'prop-types';
import styled from "styled-components";

import CommentSection from "../CommentSection/CommentSection";


const PostContainerDiv = styled.div`
    border: 1px solid rgb(224, 224, 224);
    display: flex;

    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    max-width: 600px;
    margin: 10px;
`;

const PostUserContainerDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;

    & span {
        font-weight: bold;
    }
`;

const Thumbnail = styled.img`
    margin-right: 10px;
    border-radius: 50px;
    width: 35px;
    height: 35px;
`;

const PostCommentContainer = styled.div`
    padding: 10px;
    padding-top: 0;
    padding-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const PostImage = styled.img`
    width: 100%;
`;

const PostImageContainer = styled.div`

`;

export default function PostContainer(props) {

    return (

        <PostContainerDiv>

            <PostUserContainerDiv>

                <Thumbnail src={props.data.thumbnailUrl} alt={props.data.username}/>
                <span>{props.data.username}</span>

            </PostUserContainerDiv>

            <PostImageContainer>

                <PostImage src={props.data.imageUrl} alt={props.data.username}/>

            </PostImageContainer>

            <PostCommentContainer>

                <CommentSection postId={props.data.imageUrl} username={props.username} data={props.data.comments} time={props.data.timestamp} likes={props.data.likes}/>
 
            </PostCommentContainer>

        </PostContainerDiv>

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