import movieApi from 'api/movieApi';
import Section from 'components/Section/Section';
import MovieList from 'feature/Movies/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Cast from './Cast/Cast';
import DetailHero from './DetailHero/DetailHero';
import TrailerList from './Trailer/TrailerList';

function DetailPage(props) {
  const { category, movieId } = useParams();

  const [itemDetail, setItemDetail] = useState([]);

  const [company, setCompany] = useState([]);

  useEffect(() => {
    (async () => {
      const params = {};
      try {
        const response = await movieApi.getDetail(category, movieId, {
          params,
        });
        setItemDetail(response);
        setCompany(response.production_companies.slice(0, 3));
      } catch (error) {
        console.log('failed to fetch detail', error);
      }
    })();
  }, [category, movieId]);

  return (
    <div className="detail">
      <DetailHero itemDetail={itemDetail} company={company} />
      <div className="container">
        <Section className="detail__page">
          <div className="section__header">
            <h4 className="title">Cast</h4>
          </div>
          <Cast movieId={movieId} />
        </Section>
        <Section className="detail__page">
          <div className="section__header">
            <h4 className="title">Trailer</h4>
          </div>
          <TrailerList movieId={movieId} />
        </Section>
        <Section className="detail__page">
          <div className="section__header">
            <h4 className="title">Similar</h4>
          </div>
          <MovieList type="similar" category={category} id={movieId} />
        </Section>
      </div>
    </div>
  );
}

export default DetailPage;
