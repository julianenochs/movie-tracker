import React, { Component } from 'react';
import './MovieCard.scss';
import star from '../../images/star-white.svg';
import starFavorited from '../../images/star-favorited.svg';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteFavorite, favorite, getFavorites } from '../../apiCalls';
import { updateFavorites } from '../../actions/index';

class MovieCard extends Component {
  constructor(props){
    super(props);
  }

  refreshFavorites = async () => {
    const favorites = await getFavorites(this.props.user.userId);
    this.props.updateFavorites(favorites);
    this.forceUpdate();
  }

  handleUnfavorite = (e) => {
    e.preventDefault();
    const userId = this.props.user.userId;
    const movieId = Number(e.target.closest('section').id);
    deleteFavorite(userId, movieId);
    this.refreshFavorites();
  }

  handleFavorite = (e) => {
    e.preventDefault();
    const userId = this.props.user.userId;
    const curMovieId = Number(e.target.closest('section').id);
    const movie = this.props.movies.find(movie => movie.id === curMovieId);
    const {id, title, poster_path, release_date, vote_average, overview} = movie;
    favorite(userId, id, title, poster_path, release_date, vote_average, 'overview');
    this.refreshFavorites();
  }

  render() {
    const { title, poster, overview, movieID, isLoggedIn, selectMovieToDisplay, favorites } = this.props;
    const isFavorite = favorites.find(fav => fav.title === title);
    const starUrl = isFavorite ? starFavorited : star;
    const handleFavoriting = isFavorite ? this.handleUnfavorite : this.handleFavorite;
    return (
      <section className='movie__card' id={movieID}>
        <div>
          <h1 className='movie__title'>{title}</h1>
          {isLoggedIn && <img src={starUrl} alt='favorite-button' onClick={handleFavoriting} />}
          {!isLoggedIn && (
            <NavLink to='/login'>
              <img src={star} className='favorite__star' alt='favorite-button' />
            </NavLink>
          )}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt='movie poster'
        />
        <p className='overview'>{overview}</p>
        <NavLink to ={`/movies/${movieID}`}>
          <div className='view-movie__div' >View Movie</div>
        </NavLink>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  favorites: state.favorites,
  user: state.user,
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  updateFavorites: favorites => dispatch( updateFavorites(favorites) ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
