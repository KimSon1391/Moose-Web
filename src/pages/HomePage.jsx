import { movieCategory, movieType, tvType } from 'constant';
import HeroSlider from 'feature/Hero/HeroSide/HeroSlider';
import MovieSlide from 'feature/Movies/MovieSlide/MovieSlide';
import React from 'react';

function Home(props) {
  return (
    <>
      <HeroSlider />
      <div className="container-fluid">
        <MovieSlide
          title="Trending Movie"
          type={movieType.popular}
          category={movieCategory.movie}
        />
        <MovieSlide
          title="Top Movie"
          type={movieType.top_rated}
          category={movieCategory.movie}
        />
        <MovieSlide
          title="Upcoming Movie"
          type={movieType.upcoming}
          category={movieCategory.movie}
        />
        <MovieSlide
          title="Trending Series"
          type={tvType.popular}
          category={movieCategory.tv}
        />
        <MovieSlide
          title="Top Tv Series"
          type={tvType.top_rated}
          category={movieCategory.tv}
        />
        <MovieSlide
          title="On Air Series"
          type={tvType.on_the_air}
          category={movieCategory.tv}
        />
      </div>
    </>
  );
}

export default Home;
