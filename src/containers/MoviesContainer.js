import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard/MovieCard';

const MoviesContainer = (props) => {
  const movies = props.movies.map(movie => {
    return <MovieCard 
      title={movie.title} 
      poster={movie.poster_path} 
      overview={movie.overview} 
    />;
  });
  return (
    <section>
      {movies}
    </section>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviesContainer);
