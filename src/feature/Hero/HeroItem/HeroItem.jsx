import apiConfig from 'api/apiConfig';
import movieApi from 'api/movieApi';
import Button from 'components/Button/Button';
import { movieCategory } from 'constant';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import './hero-item.scss';

HeroItem.propTypes = {
  movie: PropTypes.object,
  className: PropTypes.string,
};

function HeroItem({ movie, className }) {
  const history = useHistory();
  const itemRef = useRef(null);

  const backDrop = apiConfig.largeImage(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );

  const goToDeTailPage = () => {
    history.push(`/movie/${movie.id}`);
  };

  const handleTrailerOpen = async () => {
    const trailer = document.querySelector(`#modal_${movie.id}`);
    const videos = await movieApi.getVideos(movieCategory.movie, movie.id);
    if (videos.results.length > 0) {
      const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      trailer
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videSrc);
    } else {
      trailer.querySelector('.modal__content').innerHTML = 'No trailer';
    }
    trailer.classList.toggle('active');

    trailer.className.includes('active') &&
      document.body.classList.add('no-scroll');
  };

  return (
    <div
      ref={itemRef}
      className={`hero__slider__item ${className}`}
      style={{ backgroundImage: `url(${backDrop})` }}
    >
      <div className="hero__slider__item__content container">
        <div className="hero__slider__item__poster">
          <img
            src={apiConfig.smallImage(movie.poster_path)}
            alt="poster slider"
          />
        </div>
        <div className="hero__slider__item__info">
          <h2 className="title">
            {movie.title}
            <span>{movie.vote_average}⭐️</span>
          </h2>
          <p className="overview">{movie.overview}</p>
          <div className="action">
            <Button onClick={goToDeTailPage}>Watch</Button>
            <Button onClick={handleTrailerOpen}>Trailer</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroItem;
