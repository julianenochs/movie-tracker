import React, { Component } from 'react';
import './MovieCard.scss';
import star from '../../images/star-white.svg';
import starFavorited from '../../images/star-favorited.svg';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteFavorite, favorite, getFavorites } from '../../apiCalls';
import { updateFavorites } from '../../actions/index';

class MovieCard extends Component {

  refreshFavorites = async () => {
    const favorites = await getFavorites(this.props.user.userId);

    const update = await this.props.updateFavorites(favorites);
  }

  handleUnfavorite = async (e) => {
    const userId = this.props.user.userId;
    const movieId = Number(e.target.closest('section').id);
    const deleter = await deleteFavorite(userId, movieId);
    const test = await this.refreshFavorites();
  }

  handleFavorite = async (e) => {
    const userId = this.props.user.userId;
    const curMovieId = Number(e.target.closest('section').id);
    const movie = this.props.movies.find(movie => movie.id === curMovieId);
    const {id, title, poster_path, release_date, vote_average} = movie;
    const favorited = await favorite(userId, id, title, poster_path, release_date, vote_average, 'overview')
      .then(fav => fav);
    this.props.updateFavorites({favorites: [...this.props.favorites, favorited] });
  }

  selectMovie = e => {
    const id = e.target.closest('section').id;
    console.log(id);
  }

  render() {
    const { title, poster, overview, movieID, isLoggedIn, favorites } = this.props;
    const isFavorite = favorites.find(fav => fav.title === title);
    const starUrl = isFavorite ? starFavorited : star;
    const handleFavoriting = isFavorite ? this.handleUnfavorite : this.handleFavorite;
    return (
      <section className='movie__card' id={movieID}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt={`movie poster for ${title}`}
          />
        <p className='overview'>{overview}</p>
        <NavLink to={`/movies/${movieID}`} className='view-movie__div'>
          <div >View Movie</div>
        </NavLink>
          <div>
            {isLoggedIn && <img className='favorite__star' src={starUrl} alt='favorite-button' onClick={handleFavoriting} />}
            {!isLoggedIn && (
              <NavLink to='/login'>
                <img src={star} className='favorite__star' alt='favorite-button' />
              </NavLink>
            )}
          </div>
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
