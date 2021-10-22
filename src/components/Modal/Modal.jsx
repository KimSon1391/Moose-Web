import React, { useEffect, useRef, useState } from 'react';
import './modal.scss';

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  );
};

export const ModalContent = ({ onClose, children }) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active');
    document.body.classList.remove('no-scroll');
    if (onClose) onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {children}
      <div className="modal__content__close" onClick={closeModal}>
        <span>
          <i className="bx bx-x"></i>
        </span>
      </div>
    </div>
  );
};

export default Modal;
