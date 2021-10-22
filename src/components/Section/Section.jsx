import React from 'react';
import './section.scss';

function Section({ children, className }) {
  return (
    <section className={`section ${className ? className : null}`}>
      {children}
    </section>
  );
}

export default Section;
