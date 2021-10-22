import apiConfig from 'api/apiConfig';
import React from 'react';
import Company from '../Company/Company';
import './detail-hero.scss';

function DetailHero({ itemDetail, company }) {
  const banner = apiConfig.largeImage(
    itemDetail.backdrop_path || itemDetail.poster_path
  );
  return (
    <div className="detail__hero" style={{ backgroundImage: `url(${banner})` }}>
      <div className="detail__hero__content container">
        <div className="detail__hero__content__info">
          <div className="title">{itemDetail.title || itemDetail.name}</div>

          {itemDetail.tagline && (
            <div className="tagline">
              <q>{itemDetail.tagline}</q>
            </div>
          )}
          <div className="desc">{itemDetail.overview}</div>
          <div className="genres">
            {itemDetail.genres &&
              itemDetail.genres.slice(0, 5).map((genre, index) => (
                <span key={index} className="genres__item">
                  {genre.name}
                </span>
              ))}
          </div>
        </div>
        <div className="detail__hero__content__poster">
          <div
            className="detail__hero__content__poster__img"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <div className="watch">
              <i className="bx bx-play"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="detail__hero__data container">
        <Company company={company} />
        <div className="vote">
          <div className="vote__average">
            <h4>Vote Average</h4>
            <span>
              {itemDetail.vote_average}
              <span className="start">⭐️</span>
            </span>
          </div>
          <div className="vote__number">
            <h4>Vote Number</h4>
            <span>{itemDetail.vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailHero;
