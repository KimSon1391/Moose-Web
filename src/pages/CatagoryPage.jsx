import MoviePage from 'feature/Movies/MoviePage/MoviePage';
import React from 'react';
import { useParams } from 'react-router';

function CatagoryPage(props) {
  const { category } = useParams();

  return (
    <>
      <div className="container-fluid">
        <MoviePage category={category} />
      </div>
    </>
  );
}

export default CatagoryPage;
