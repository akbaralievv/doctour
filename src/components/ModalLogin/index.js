import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ModalSuccess.module.css';

function ModalLogin({ setOpenModal }) {
  const modalRef = useRef();

  const closeModal = () => {
    document.body.style.overflow = '';
    setOpenModal && setOpenModal(false);
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
        <p>Авторизуйтесь</p>
        <NavLink to={'/login'}>Log in</NavLink>
      </div>
    </div>
  );
}

export default ModalLogin;
