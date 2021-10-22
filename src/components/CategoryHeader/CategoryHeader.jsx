import React from 'react';
import './category-header.scss';

function CategoryHeader({ children }) {
  return (
    <div className="category__header container">
      <h2 className="title">{children}</h2>
    </div>
  );
}

export default CategoryHeader;
