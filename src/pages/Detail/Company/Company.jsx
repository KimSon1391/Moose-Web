import React from 'react';
import './company.scss';

function Company({ company }) {
  return (
    <div className="company">
      <h4 className="title">Studio</h4>
      <ul className="company__wrap">
        {company.map((cast, index) => (
          <li key={index} className="company__name">
            {cast.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Company;
