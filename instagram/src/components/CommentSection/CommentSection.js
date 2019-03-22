import React, {Component} from 'react';

import Moment from 'react-moment';
import { MessageCircle, Heart } from 'react-feather';

import styled from "styled-components";

const PostInteractionContainer = styled.div`
    padding: 10px 0;

    & span {
        padding-top: 5px;
        font-weight: bold;
    }
`;

const IconContainer = styled.div`
    display: flex;
    width: 75px;
    justify-content: space-between;
    flex-wrap: wrap;

    &:hover{
        cursor: pointer;    
    }
`;

const PostFooterContainer = styled.div`
    padding-top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & form{
        width: 100%;
    }
`;

const FooterTime = styled.div`
    padding-bottom: 10px;
    font-size: 14px;
    color: gray;
`;

const FooterCommentInput = styled.input`
    border: none;
    height: 50px;
    border-top: 1px solid lightgray;
    width: 100%;
    color: gray;
`;

const CommentContainer = styled.div`
    display: flex;
    margin-bottom: 4px;
`;

const CommentUsername = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

class CommentSection extends Component {
    constructor(props){
        super();

        this.state = {
            data: props.data,
            time: props.time,
            likes: props.likes,
            clicked: false,
            newComment: ''
        }
    };

    componentDidMount(){
        const id = this.props.postId;
        if(localStorage.getItem(id)){
            this.setState({
                data: JSON.parse(localStorage.getItem(id))
            })

        } else {

            this.storeComments();

            }
    }
    
    
    addNewComment = event => {

        event.preventDefault();
        const newComment = {text: this.state.newComment, username: this.props.username}
        this.setState(prevstate => ({data: [...prevstate.data, newComment], newComment: ''}))

        setTimeout(() => {
            this.storeComments();
        }, 500);
        
    }

    storeComments = () => {
        console.log(this.state.data)
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.data)
        )
    }

    changeHandler = event => {
        this.setState({newComment: event.target.value})
    }

    addLike = () => {
        this.setState({likes: this.state.likes + 1, clicked: true})
    }

    removeLike = () => {
        this.setState({likes: this.state.likes - 1, clicked: false})
    }

    

    render(){
        return (
            <>
                <PostInteractionContainer>
                    
                    <IconContainer>

                        {this.state.clicked ? <Heart onClick={this.removeLike} size={32} strokeWidth={1} color="red" fill="red"/>
                         : <Heart onClick={this.addLike} size={32} strokeWidth={1}/>}
                        <MessageCircle size={32} strokeWidth={1}/>
                        <span>{this.state.likes} likes </span>

                    </IconContainer>

                </PostInteractionContainer>

                {this.state.data.map((comment, index) => {
                    return <CommentContainer key={index}>
                        <CommentUsername>{comment.username}</CommentUsername>
                        <span className="comment-text">{comment.text}</span>
                    </CommentContainer>
            })}
                   
                <PostFooterContainer>

                    <FooterTime>

                        <Moment fromNow>{this.state.time.timestamp}</Moment>

                    </FooterTime>

                    <form onSubmit={this.addNewComment}>

                        <FooterCommentInput
                            type="text" 
                            placeholder="Add a comment..." 
                            onChange={this.changeHandler}
                            value={this.state.newComment}
                        />

                    </form>

                </PostFooterContainer>
            </>
    )};
}

export default CommentSection;