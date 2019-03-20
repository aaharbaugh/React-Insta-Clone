import React, { Component } from 'react';
import './App.css';

import withAuthenticate from './authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends Component {
  constructor(props){
    super();

  }

  render() {
    return (
      <ComponentFromWithAuthenticate />
    );
  }
}

export default App;

