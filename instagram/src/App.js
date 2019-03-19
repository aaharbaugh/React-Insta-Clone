import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor(props){
    super();

  }

  render() {
    return (
      <PostsPage />
    );
  }
}

export default App;

