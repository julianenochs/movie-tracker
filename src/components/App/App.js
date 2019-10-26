import React, { Component } from 'react';
import './App.scss';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer/MoviesContainer';
import RegisterForm from '../../containers/RegisterForm/RegisterForm';
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

    this.props.updateFavorites(favoriteMovies);

    console.log(favoriteMovies);
  };

  render() {
    if (this.props.isLoggedIn) {
      this.loadFavorites();
    }
    return (
      <div className='app'>
        <Header />
        <Route exact path='/' component={MoviesContainer} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={RegisterForm} />
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
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
