import React, { useEffect, useRef } from 'react';

function TrailerItem({ trailer }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className="detail__trailer__item">
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}`}
        ref={iframeRef}
        width="100%"
        title="trailer"
      ></iframe>
      <div className="detail__trailer__title">
        <h2>{trailer.name}</h2>
      </div>
    </div>
  );
}

export default TrailerItem;
