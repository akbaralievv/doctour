import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Auth.module.css';
import Phone from '../ui/inputs/Phone';
import Password from '../ui/inputs/Password';
import { postAuthSlice } from '../../redux/slices/PostAuthSlice';
import ModalSuccess from '../ModalSuccess';
import PreloadBtn from '../PreloadBtn/PreloadBtn';

const Auth = ({ forgot }) => {
  const { data, loading, error } = useSelector((state) => state.PostAuthSlice);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [value, setValue] = useState({
    phone_number: '',
    password: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
      setOpenModal(true);
      setErrorMessage(false);
    } else if (error) {
      setErrorMessage(true);
    }
  }, [data, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      dispatch(postAuthSlice(value));
    }
  };

  const disabled = value.phone_number.length >= 12 && value.password.length >= 4;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {openModal && (
        <ModalSuccess setOpen={setOpenModal} setValue={setValue} text="Вы успешно авторизовались" />
      )}
      {errorMessage && <p style={{ color: 'red' }}>Некорректые данные</p>}
      <div>
        Логин
        <Phone value={value.phone} setValue={setValue} />
      </div>
      <div>
        Пароль
        <Password value={value.password} setValue={setValue} name="password" />
        <div className={styles.forgot}>
          <NavLink onClick={forgot}>Забыли пароль?</NavLink>
        </div>
      </div>
      <button type="submit" className={!disabled ? styles.disabled : ''} disabled={loading}>
        {loading ? <PreloadBtn /> : 'Войти'}
      </button>
    </form>
  );
};

export default Auth;
