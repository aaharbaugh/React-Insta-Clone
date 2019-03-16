import React, { Component } from 'react';
import './App.css';

import PostContainer  from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

import data from "./dummy-data";

class App extends Component {
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
                return <PostContainer data={post} key={post.timestamp}/>
              }) : <br /> }

      </div>
    );
  }
}

export default App;

