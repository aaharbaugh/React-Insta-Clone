import React, {Component} from 'react';
import './CommentSection.css';
import Moment from 'react-moment';
import { MessageCircle, Heart } from 'react-feather';

class CommentSection extends Component {
    constructor(props){
        super();

        this.state = {
            data: [],
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
                <div className="post-interaction-container">
                    <div className="icon">
                        {this.state.clicked ? <Heart onClick={this.removeLike} size={32} strokeWidth={1} color="red" fill="red"/>
                         : <Heart onClick={this.addLike} size={32} strokeWidth={1}/>}
                        <MessageCircle size={32} strokeWidth={1}/>
                        <span>{this.state.likes} likes </span>
                    </div>
                </div>

                {this.state.data.map((comment, index) => {
                    return <div className="comment-section" key={comment.text}>
                        <span className="comment-username">{comment.username}</span>
                        <span className="comment-text">{comment.text}</span>
                    </div>
            })}
                   
                <div className="post-footer-container">
                    <div className="footer-time">
                        <Moment fromNow>{this.state.time.timestamp}</Moment>
                    </div>
                    <form onSubmit={this.addNewComment}>
                        <input 
                            className="footer-comment-input" 
                            type="text" 
                            placeholder="Add a comment..." 
                            onChange={this.changeHandler}
                            value={this.state.newComment}
                        />
                    </form>
                </div>
            </>
    )};
}

export default CommentSection;