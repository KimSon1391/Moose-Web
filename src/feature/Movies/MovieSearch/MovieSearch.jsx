import Button from 'components/Button/Button';
import InputField from 'components/FormControl/InputFiled/InputField';
import { movieCategory } from 'constant';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './movie-search.scss';

function MovieSearch({ category, keyword }) {
  const history = useHistory();
  const [search, setSearch] = useState(keyword ? keyword : '');

  const searchHandle = useCallback(() => {
    if (search.trim().length > 0) {
      history.push(`/${movieCategory[category]}/search/${search}`);
    }
  }, [history, category, search]);

  useEffect(() => {
    const enterHandle = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        searchHandle();
      }
    };
    document.addEventListener('keyup', enterHandle);
    return () => {
      document.removeEventListener('keyup', enterHandle);
    };
  }, [keyword, searchHandle]);

  return (
    <div className="movie__search">
      <InputField
        className="input__search"
        type="text"
        placeholder="Search Keyword"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className="btn__search" onClick={searchHandle}>
        <i className="bx bx-search"></i>
      </Button>
    </div>
  );
}

export default MovieSearch;
