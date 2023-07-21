import React, { useRef, useEffect } from 'react';
import { clearDataCreateAcc } from '../../redux/slices/PostCreateAccSlice';
import { useDispatch } from 'react-redux';

import styles from './ModalSuccess.module.css';
import { clearDataAuth } from '../../redux/slices/PostAuthSlice';

function ModalSuccess({ setOpen, text, setValue }) {
  const modalRef = useRef();
  const dispatch = useDispatch();

  const closeModal = () => {
    document.body.style.overflow = '';
    setOpen(false);
    dispatch(clearDataCreateAcc(''));
    dispatch(clearDataAuth(''));
    setValue && setValue((prev) => ({ ...prev, password: '', phone_number: '' }));
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
