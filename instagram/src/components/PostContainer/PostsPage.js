import React, { Component } from 'react';
import '../../App.css';

import PostContainer  from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

import data from "../../dummy-data";

class PostsPage extends Component {
  constructor(props){
    super();

    this.state = {
      data: [],

    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ data: data });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
            <SearchBar />
            {this.state.data.length > 0 ? this.state.data.map(post => {
                return <PostContainer data={post} key={post.timestamp} username={this.props.username}/>
              }) : <br /> }

      </div>
    );
  }
}

export default PostsPage;

