import Modal, { ModalContent } from 'components/Modal/Modal';
import React, { useRef } from 'react';
import './hero-trailer.scss';

const HeroTrailer = ({ movie }) => {
  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <Modal active={false} id={`modal_${movie.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          border="none"
          frameBorder="0"
          cellSpacing="0"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroTrailer;
