import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ModalLogout.module.css';
import { removeAccessToken } from '../../redux/slices/PostAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearData, getLogout } from '../../redux/slices/GetLogoutLSice';
import PreloadBtn from '../PreloadBtn/PreloadBtn';

function ModalLogout({ setOpenModal }) {
  const { data, loading, error } = useSelector((state) => state.GetLogoutLSice);
  const modalRef = useRef();
  const dispatch = useDispatch();

  const closeModal = () => {
    document.body.style.overflow = '';
    setOpenModal && setOpenModal(false);
  };
  const handleClick = () => {
    dispatch(getLogout());
  };

  useEffect(() => {
    if (data || error) {
      dispatch(removeAccessToken());
      dispatch(clearData(''));
      closeModal();
    }
  }, [data, error]);

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
        <p>Действительно хотите выйти?</p>
        <NavLink to={'/login'} onClick={handleClick} disabled={loading}>
          {loading ? <PreloadBtn /> : 'Выйти'}
        </NavLink>
      </div>
    </div>
  );
}

export default ModalLogout;
