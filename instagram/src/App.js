import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostContainer  from "./components/PostContainer/PostContainer";


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
            {this.state.data.map(post => {
                return <PostContainer data={post} />
              })}
      </div>
    );
  }
}

export default App;
