import React, { Component } from 'react';
import './App.css';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer';
import { Route } from 'react-router-dom';
import { addMovies } from '../../actions/index';
import { connect } from 'react-redux';

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
    this.props.addMovies(movies);
  }

  render() {
    return (
      <div>
      <Route exact path="/" render={() => <MoviesContainer />} />
      <Route exact path="/login" component={LoginForm} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies : movies => dispatch( addMovies(movies) )
});

export default connect(null, mapDispatchToProps)(App);

//  https://image.tmdb.org/t/p/original/${poster_path}
// use this link in src of image to display poster for movie
