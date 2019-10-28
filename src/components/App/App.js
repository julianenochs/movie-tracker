import React, { Component } from 'react';
import './App.scss';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer/MoviesContainer';
import RegisterForm from '../../containers/RegisterForm/RegisterForm';
import MovieInfo from '../MovieInfo/MovieInfo';
import { Route } from 'react-router-dom';
import {
  addMovies,
  updateError,
  updateFavorites,
  selectMovie
} from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../../Header/header';
import Favorites from '../../Favorites/Favorites';

class App extends Component {
  componentDidMount = async () => {
    fetchPopularMovies()
      .then(movies => {
        this.props.addMovies(movies);
      })
      .catch(error => {
        this.props.updateError(error);
      });
  };

  selectMovieToDisplay = id => {
    let selectedMovie = this.props.movies.find(movie => movie.id === id);
    this.props.selectMovie(selectedMovie);
    return selectedMovie;
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <Route
          exact
          path='/'
          render={props => (
            <MoviesContainer
              {...props}
              selectMovieToDisplay={this.selectMovieToDisplay}
            />
          )}
        />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />
        {this.props.movies.map(movie => {
          return (
            <Route
              exact
              path={`/movies/${movie.id}`}
              render={props => (
                <MovieInfo
                  {...props}
                  selectMovieToDisplay={this.selectMovieToDisplay}
                  id={movie.id}
                />
              )}
            />
          );
        })}
        <Route exact path='/favorites' component={Favorites} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  updateError: error => dispatch(updateError(error)),
  updateFavorites: favorites => dispatch(updateFavorites(favorites)),
  selectMovie: movie => dispatch(selectMovie(movie))
});

const mapStateToProps = state => ({
  user: state.user,
  error: state.error,
  isLoggedIn: state.isLoggedIn,
  movies: state.movies,
  favorites: state.favorites,
  selectMovieToDisplay: state.selectMovieToDisplay,
  selectMovie: state.selectMovie
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
