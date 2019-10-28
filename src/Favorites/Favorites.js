import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard/MovieCard';

const Favorites = props => {
  console.log('favorites props', props.movies);
  const allFavoritedMovies = props.movies.map((movie, i) => {
    if (movie.isFavorite === true) {
      return (
        <MovieCard
          title={movie.title}
          poster={movie.poster_path}
          overview={movie.overview}
          movieID={movie.id}
          key={i}
        />
      );
    }
  });

  return (
    <section>
      <h1>{allFavoritedMovies}</h1>
    </section>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  null
)(Favorites);
