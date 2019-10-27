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
import { getFavorites } from '../../apiCalls';

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

  // selectMovieToDisplay = (id) => {
  //   let selectedMovie = this.props.movies.find(movie => movie.id === id)
  // }

  render() {
    // deleteFavorite(1, 100);
    // favorite(1, 100, 'Joker', '', '', '', '');
    if (this.props.isLoggedIn) {
        this.loadFavorites()
        .catch( error => console.log('no favs'));
    }
    return (
      <div className='app'>
        <Header />
        <Route exact path='/' component={MoviesContainer} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />
        {this.props.movies.map((movie, i) => {
          return <Route key={i} exact path={`/movies/${movie.id}`} component={MovieInfo}/>
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
  movies: state.movies,
  favorites: state.favorites,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
