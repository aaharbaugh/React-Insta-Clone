import React, { Component } from 'react';
import './App.css';

import PostContainer  from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

import data from "./dummy-data";

class App extends Component {
  constructor(props){
    super();

    this.state = {
      data: data,

    }
  }

  render() {
    return (
      <div className="App">
            <SearchBar />
            {this.state.data.map(post => {
                return <PostContainer data={post} key={post.timestamp}/>
              })}
      </div>
    );
  }
}

export default App;

