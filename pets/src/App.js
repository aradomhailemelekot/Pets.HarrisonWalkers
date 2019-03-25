import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Router, Route, Indexroute, hashHistory } from 'react-router';
import Header from './Header.js';
import Random from './Random.js';
import DropDown from './DropDown.js';
import Footer from './Footer.js';
import HarrisonWalkers from './HarrisonWalkers.js';
import './App.css';

class App extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        console.log("i am res", res)
        this.setState({
          // posts: res.data()
        })
      })
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <div className='card-content'>
              <span className='card-title'>{post.title}</span>
              <p>{posts.body}</p>
            </div>

          </div>
        )
      })
    ) : (
        <div className="location"> No posts to this DIV element yet</div>
      )
    return (
      <div className="App">
        <h4 className='Center'>Pet photos coming soon!</h4>
        {postList}
        <Header />
        <Random />
        <DropDown />
        <HarrisonWalkers />
        <Footer />

      </div>



    );
  }
}

export default App;