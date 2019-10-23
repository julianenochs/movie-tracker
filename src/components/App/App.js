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
    
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={MoviesContainer} />
        <Route exact path="/login" component={LoginForm} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies : movies => dispatch( addMovies(movies) )
});

const mapStateToProps = state => ({
  user: state.user
})

export default connect(null, mapDispatchToProps)(App);
