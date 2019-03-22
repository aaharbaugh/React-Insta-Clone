import React, { Component } from 'react';

import PostContainer  from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

import styled from "styled-components";

import data from "../../dummy-data";

const App = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

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
      <App>
            <SearchBar searchFilter={this.searchFilter} logoutFunction={this.props.logoutFunction}/>
            {this.state.data.length > 0 ? this.state.data
              .filter(post => new RegExp(this.state.search, "i").test(post.username))
              .map(post => (
                <PostContainer data={post} key={post.imageUrl} username={this.props.username}/>
              )) : <br /> }

      </App>
    );
  }
}

export default PostsPage;

