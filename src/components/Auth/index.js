import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Auth.module.css';
import Phone from '../ui/inputs/Phone';
import Password from '../ui/inputs/Password';
import { useDispatch, useSelector } from 'react-redux';
import { postAuthSlice, setAuth } from '../../redux/slices/PostAuthSlice';
import ModalSuccess from '../ModalSuccess';

const Auth = ({ forgot }) => {
  const { data, access } = useSelector((state) => state.PostAuthSlice);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState({
    phone_number: '',
    password: '',
  });
  // console.log(access, 'access');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.access) {
      document.body.style.overflow = 'hidden';
      setOpenModal(true);
      localStorage.setItem('access', JSON.stringify(data.access));
      localStorage.setItem('refresh', JSON.stringify(data.refresh));
      dispatch(setAuth('success'));
    }
  }, [data]);
  console.log(openModal);
  // console.log(data, 'data');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (disabled) {
      dispatch(postAuthSlice(value));
    }
  };

  const disabled = value.phone_number.length >= 12 && value.password.length >= 4;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {openModal && <ModalSuccess setOpen={setOpenModal} text="Вы успешно авторизовались" />}
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
      <button type="submit" className={!disabled ? styles.disabled : ''}>
        Войти
      </button>
    </form>
  );
};

export default Auth;
