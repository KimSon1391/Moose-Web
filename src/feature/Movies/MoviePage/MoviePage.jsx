import movieApi from 'api/movieApi';
import Button from 'components/Button/Button';
import CategoryHeader from 'components/CategoryHeader/CategoryHeader';
import { movieCategory, movieType, tvType } from 'constant';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MovieItem from '../MovieItem/MovieItem';
import MovieSearch from '../MovieSearch/MovieSearch';
import './movie-page.scss';

function MoviePage({ category }) {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const { search } = useParams();

  useEffect(() => {
    (async () => {
      let response = null;

      try {
        if (search === undefined) {
          const params = {};
          switch (category) {
            case movieCategory.movie:
              response = await movieApi.getMovies(movieType.popular, {
                params,
              });
              break;
            default:
              response = await movieApi.getTv(tvType.popular, { params });
              break;
          }
        } else {
          const params = {
            query: search,
          };
          response = await movieApi.searchKeyword(category, { params });
        }

        setMovies(response.results);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.log('failed to fetch', error);
      }
    })();
  }, [category, search]);

  const loadMore = () => {
    (async () => {
      let response = null;
      try {
        if (search === undefined) {
          const params = {
            page: page + 1,
          };
          switch (category) {
            case movieCategory.movie:
              response = await movieApi.getMovies(movieType.popular, {
                params,
              });
              break;
            default:
              response = await movieApi.getTv(tvType.popular, { params });
              break;
          }
        } else {
          const params = {
            page: page + 1,
            query: search,
          };
          response = await movieApi.searchKeyword(category, { params });
        }
        setMovies([...movies, ...response.results]);
        setPage(page + 1);
      } catch (error) {
        console.log('failed to fetch', error);
      }
    })();
  };

  return (
    <>
      <CategoryHeader>
        {category === movieCategory.movie ? 'Movies' : 'Tv Series'}
      </CategoryHeader>
      <MovieSearch category={category} keyword={search} />
      <div className="movie__page">
        {movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} category={category} />
        ))}
      </div>
      {page < totalPages ? (
        <Button className="outline load-more" onClick={loadMore}>
          Load More
        </Button>
      ) : null}
    </>
  );
}

export default MoviePage;
