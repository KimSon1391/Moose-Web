import movieApi from 'api/movieApi';
import { movieCategory } from 'constant';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieItem from '../MovieItem/MovieItem';
import './movie-list.scss';

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

function MovieList({ type, category, id }) {
  const [movies, setMovies] = useState([]);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    (async () => {
      let response = null;
      const params = {};

      try {
        if (type !== 'similar') {
          switch (category) {
            case movieCategory.movie:
              response = await movieApi.getMovies(type, { params });
              break;
            default:
              response = await movieApi.getTv(type, { params });
              break;
          }
        } else {
          response = await movieApi.getSimilar(category, id);
        }
        setMovies(response.results);
      } catch (error) {
        console.log('failed to fetch', error);
      }
    })();
  }, [category, type, id]);

  return (
    <div className="movie__list">
      <Swiper
        modules={[Navigation]}
        effect="slide"
        spaceBetween={10}
        slidesPerView={'auto'}
        navigation={true}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieItem movie={movie} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieList;
