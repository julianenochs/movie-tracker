import React, { Component } from 'react';
import './App.scss';
import { fetchPopularMovies, getFavorites } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer/MoviesContainer';
import RegisterForm from '../../containers/RegisterForm/RegisterForm';
import MovieInfo from '../MovieInfo/MovieInfo';
import { Route } from 'react-router-dom';
import {
  addMovies,
  updateError,
  updateFavorites,
  selectMovie,
  updateIsLoggedIn,
  updateUser,
} from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../../Header/header';
import Favorites from '../../Favorites/Favorites';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount = async () => {
    fetchPopularMovies()
      .then(movies => {
        this.props.addMovies(movies);
        this.checkForExistingUser();
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

  checkForExistingUser = () => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if(localUser) {
      const { email, userId } = localUser;
      this.props.updateIsLoggedIn(true);
      this.props.updateUser(email, userId);
      this.loadFavorites();
    }
  };

  loadFavorites = async () => {
    const favoriteMovies = await getFavorites(this.props.user.userId);
    favoriteMovies.favorites.forEach(movie => {
      let updateMovie = this.props.movies.find(
        mov => mov.title === movie.title
      );
      if (updateMovie) {
        updateMovie.isFavorite = true;
      }
    });
    this.props.updateFavorites(favoriteMovies);
  }

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
        <Route exact path='/login' render={() => <LoginForm loadFavorites={this.loadFavorites} />} />
        <Route exact path='/register' component={RegisterForm} />
        {this.props.movies.map((movie) => {
          return (
            <Route
              key={movie.id}
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
  selectMovie: movie => dispatch(selectMovie(movie)),
  updateIsLoggedIn: bool => dispatch( updateIsLoggedIn(bool) ),
  updateUser: (email, id) => dispatch( updateUser(email, id) ),
  getFavorites: id => dispatch( getFavorites(id) ),
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

App.propTypes = {
  user: PropTypes.object,
  error: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  movies: PropTypes.array,
  favorites: PropTypes.array,
  selectMovieToDisplay: PropTypes.object,
  selectMovie: PropTypes.func
};
