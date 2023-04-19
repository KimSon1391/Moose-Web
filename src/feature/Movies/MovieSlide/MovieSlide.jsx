import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section/Section';
import MovieList from '../MovieList/MovieList';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

MovieSlide.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  category: PropTypes.string,
};

function MovieSlide({ title, type, category }) {
  return (
    <Section>
      <div className="section__header">
        <h2 className="title">{title}</h2>
        <Link to={category}>
          <Button className="outline">More movie</Button>
        </Link>
      </div>
      <MovieList type={type} category={category} />
    </Section>
  );
}

export default MovieSlide;
