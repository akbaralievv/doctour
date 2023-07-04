import React, { useRef, useEffect } from 'react';

import styles from './ModalSuccess.module.css';

function ModalSuccess({ setOpen, text }) {
  const modalRef = useRef();
  const closeModal = () => {
    document.body.style.overflow = '';
    setOpen(false);
  };
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div ref={modalRef}>
        <button onClick={closeModal} className={styles.close}>
          X
        </button>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ModalSuccess;
