import movieApi from 'api/movieApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TrailerItem from './TrailerItem';
import './trailer-list.scss';

const TrailerList = ({ movieId }) => {
  const { category } = useParams();

  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await movieApi.getVideos(category, movieId);
        setTrailers(res.results.slice(0, 5));
      } catch (error) {
        console.log('Failed to fetch trailer', error);
      }
    })();
  }, [category, movieId]);

  if (trailers.length > 0) {
    return (
      <div className="detail__trailer">
        {trailers.map((trailer, index) => (
          <TrailerItem key={index} trailer={trailer} />
        ))}
      </div>
    );
  } else {
    return <h3>No Trailer</h3>;
  }
};

export default TrailerList;
