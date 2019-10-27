import React, { Component } from 'react';
import './App.scss';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer/MoviesContainer';
import RegisterForm from '../../containers/RegisterForm/RegisterForm';
import MovieInfo from '../MovieInfo/MovieInfo';
import { Route } from 'react-router-dom';
import { addMovies, updateError, updateFavorites } from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../../Header/header';
import { favorite, getFavorites, deleteFavorite } from '../../apiCalls';

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
  };

  selectMovieToDisplay = (id) => {
    let selectedMovie = this.props.movies.find(movie => movie.id === id)
    console.log('selectedMovie', selectedMovie)
    // this.props.selectMovie()
  }

  render() {
    favorite(1, 100, 'Joker', '', '', '', '');
    if (this.props.isLoggedIn) {
      this.loadFavorites();
    }
    return (
      <div className='app'>
        <Header />
        <Route exact path='/' component={MoviesContainer} selectMovieToDisplay={this.selectMovieToDisplay} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />
        {this.props.movies.map(movie => {
          return <Route exact path={`/movies/${movie.id}`} component={MovieInfo}/>
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies)),
  updateError: error => dispatch(updateError(error)),
  updateFavorites: favorites => dispatch(updateFavorites(favorites))
});

const mapStateToProps = state => ({
  user: state.user,
  error: state.error,
  isLoggedIn: state.isLoggedIn,
  movies: state.movies
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
