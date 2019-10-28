import React from 'react';
import { connect } from 'react-redux';

export const MovieInfo = props => {
  console.log('props', props);
  const selectMovie = props.selectMovieToDisplay(props.id);
  return (
    <section>
      <h1>Title: {props.selectMovie.title}</h1>
      <h1>Release Date: {props.selectMovie.release_date}</h1>
      <h1>Vote Average: {props.selectMovie.vote_average}</h1>
    </section>
  );
};

const mapStateToProps = state => ({
  selectMovie: state.selectMovie
});

export default connect(
  mapStateToProps,
  null
)(MovieInfo);
