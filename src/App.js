import './reset.css';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios';


import List from  './components/list/List.js';
import NavBar from './components/navBar/NavBar.js';

const baseUrl = '/api/books';

class App extends Component {
  constructor(){
    super();

    this.state={
      books: []
    }
  }

  componentDidMount(){
    axios.get(baseUrl).then(
      (res)=> {
        this.setState({
          books: res.data
        })
      }
    );
  }

  render() {
    axios.get(baseUrl).then(
      (res)=> {
        this.setState({
          books: res.data
        })
      }
    );

    return (
      
      <div className="App">
      <NavBar />
      <List books={ this.state.books } />
      </div>
    );
  }
}

export default App;
