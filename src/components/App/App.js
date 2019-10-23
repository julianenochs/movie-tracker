import React, { Component } from 'react';
import './App.css';
import { fetchPopularMovies } from '../../apiCalls';

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

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

export default App;

//  https://image.tmdb.org/t/p/original/${poster_path}
// use this link in src of image to display poster for movie
