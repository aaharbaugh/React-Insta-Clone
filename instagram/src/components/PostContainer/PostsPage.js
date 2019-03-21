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
      search: ''
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ data: data });
    }, 1000);
  }

  searchFilter = (event) => {
    this.setState({ search: event.target.value });

  }

  render() {
    return (
      <div className="App">
            <SearchBar searchFilter={this.searchFilter}/>
            {this.state.data.length > 0 ? this.state.data
              .filter(post => new RegExp(this.state.search, "i").test(post.username))
              .map(post => (
                <PostContainer data={post} key={post.imageUrl} username={this.props.username}/>
              )) : <br /> }

      </div>
    );
  }
}

export default PostsPage;

