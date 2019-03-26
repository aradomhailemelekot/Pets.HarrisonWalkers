import React, { Component } from 'react';
import axios from 'axios';
import Logo from './Logo.js';
import Header from './Header.js';
import Random from './Random.js';
import DropDown from './DropDown.js';
import Footer from './Footer.js';
import HarrisonWalkers from './HarrisonWalkers.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      breed: ''
    }
    this.getPropertyName = this.getPropertyName.bind(this)
  }

  getImages() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => res)
      .then(posts => {
        this.setState({
          posts: posts.data.message,
        })
      })
  }

  componentDidMount() {
    this.getImages()
  }

  getPropertyName() {
    console.log('running')
    console.log(Object.getOwnPropertyNames(this.state.posts.data.message[0]));
  }

  handleSubmit(e) {
    e.preventDefault();
    //check this if something is not working
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(function (res) {
        return res.json();
      }
      )

  }

  render() {
    // const { posts } = this.state;
    // const postList = posts.length ? (
    //   posts.map(post => {
    //     return (
    //       <div className='post card' key={post.id}>
    //         <div className='card-content'>
    //           <span className='card-title'>{post.title}</span>
    //           <p>{posts.body}</p>
    //           <nav className='main-nav'>
    //             <ul>
    //               <li>Logo</li>
    //               <li>Photos</li>
    //               <li>Dog Walks</li>
    //               <li>Pup Training</li>
    //             </ul>

    //           </nav>

    //         </div>

    //       </div>
    //     )
    //   })
    // ) : (
    //     <div className="location">
    //       {/* Do I need this div?o posts to this div? */}
    //     </div>
    //   )
    return (
      <div className="App">
        {/* {postList} */}
        <button onClick={this.getPropertyName}>Click me</button>
        <Logo />
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