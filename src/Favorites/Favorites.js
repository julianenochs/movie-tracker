import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard/MovieCard';
import './Favorites.scss'
class Favorites extends Component {
  returnFavorites = () => {
    return this.props.favorites.map((fav, i) => {
      return (
        <MovieCard 
          title={fav.title}
          poster={fav.poster_path}
          overview={fav.overview}
          movieID={fav.movie_id}
          key={i}
        />
      );
    });
  }

  render() {
    return (
      <section className='favorites__container'>
        {this.returnFavorites()}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites,
  movies: state.movies,
});

export default connect(
  mapStateToProps,
  null
)(Favorites);
