import apiConfig from 'api/apiConfig';
import movieApi from 'api/movieApi';
import { PLACEHOLDER } from 'constant';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './cast.scss';

function Cast({ movieId }) {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await movieApi.credit(category, movieId);
        setCasts(response.cast.slice(0, 5));
      } catch (error) {
        console.log('faild to fetch cast', error);
      }
    })();
  }, [movieId, category]);

  return (
    <div className="cast">
      <div className="cast__wrap">
        {casts.map((cast, index) => (
          <div key={index} className="cast__item">
            <div className="cast__item__image">
              {cast.profile_path ? (
                <img
                  src={apiConfig.smallImage(cast.profile_path)}
                  alt="movie img"
                  loading="lazy"
                />
              ) : (
                <img src={PLACEHOLDER} alt="movie img" loading="lazy" />
              )}
            </div>
            <h4 className="cast__item__title">
              {cast.name || cast.original_name}
            </h4>
            <p className="cast__item__character">{cast.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
