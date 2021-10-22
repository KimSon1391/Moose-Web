import movieApi from 'api/movieApi';
import { movieType } from 'constant';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroItem from '../HeroItem/HeroItem';
import HeroTrailer from '../HeroTrailer/HeroTrailer';
import './hero-slider.scss';

function HeroSlider(props) {
  const [movies, setMovies] = useState([]);

  SwiperCore.use([Autoplay, EffectFade, Navigation]);

  useEffect(() => {
    (async () => {
      const params = { page: 1 };
      try {
        const response = await movieApi.getMovies(movieType.popular, {
          params,
        });
        setMovies(response.results.slice(17, 20));
      } catch (error) {
        console.log('Faild to fetch movies:', error);
      }
    })();
  }, []);

  return (
    <div className="hero__slider">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 4000,
        }}
        navigation={true}
        grabCursor={true}
        spaceBetween={0}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroItem
                movie={movie}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movies.map((movie, index) => (
        <HeroTrailer key={index} movie={movie} />
      ))}
    </div>
  );
}

export default HeroSlider;
