import apiConfig from 'api/apiConfig';
import { movieCategory } from 'constant';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './movie-item.scss';

MovieItem.propTypes = {
  movie: PropTypes.object,
};

function MovieItem({ movie, category }) {
  const itemImage = apiConfig.smallImage(
    movie.poster_path ? movie.poster_path : movie.backdrop_path
  );

  const movieDetail = '/' + movieCategory[category] + '/' + movie.id;

  return (
    <Link to={movieDetail} className="movie__item">
      <div className="movie__item__image">
        <img src={itemImage} alt="movie img" loading="lazy" />
        <button>
          <i className="bx bx-play-circle"></i>
        </button>
      </div>
      <h4 className="movie__item__title">{movie.title || movie.name}</h4>
    </Link>
  );
}

export default MovieItem;
