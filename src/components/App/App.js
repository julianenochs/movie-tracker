import React, { Component } from 'react';
import './App.scss';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer/MoviesContainer';
import RegisterForm from '../../containers/RegisterForm/RegisterForm';
import { Route } from 'react-router-dom';
import { addMovies } from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../../Header/header';

class App extends Component {
  componentDidMount = async () => {
    try {
      const movies = await fetchPopularMovies();
      this.props.addMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
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
  addMovies: movies => dispatch(addMovies(movies))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
