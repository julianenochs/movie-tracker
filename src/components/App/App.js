import React, { Component } from 'react';
import './App.scss';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer/MoviesContainer';
import RegisterForm from '../../containers/RegisterForm/RegisterForm';
import { Route } from 'react-router-dom';
import { addMovies, updateError } from '../../actions/index';
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

  render() {
    // favorite(1, 1, '', 'test', '', '', '', '');
    // favorite(1, 2, '', 'test', '', '', '', '');
    deleteFavorite(1, 1);
    getFavorites(1);
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
  updateError: error => dispatch(updateError(error))
});

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
