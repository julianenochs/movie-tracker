import React, { Component } from 'react';
import './App.css';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import { Router, Route } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount = async () => {
    const movies = await fetchPopularMovies();
    console.log(movies);
    this.setState({ movies });
  }

  render = () => {
    return (
      <div>
      <h1>Hello</h1>
      <Router>
        <Route exact path='/'
              render={ (props) => <LoginForm {...props}/>}>
        </Route>
      </Router>
      </div>
    );
  }
}

export default App;

//  https://image.tmdb.org/t/p/original/${poster_path}
// use this link in src of image to display poster for movie
