import React, { Component } from 'react';
import './App.css';
import { fetchPopularMovies } from '../../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import MoviesContainer from '../../containers/MoviesContainer';
import { Route } from 'react-router-dom';
import { addMovies } from '../../actions/index';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount = async () => {
    try {
      const movies = await fetchPopularMovies();
      this.props.addMovies(movies);
    } catch(error) {
      console.log(error);
    }
    
    // fetch('http://localhost:3001/api/v1/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: 'alan2@turing.io',
    //     password: 'password'
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch( error => console.log(error.error.detail))
  };

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
