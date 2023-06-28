import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Auth.module.css';
import Phone from '../ui/inputs/Phone';
import Password from '../ui/inputs/Password';
import { useDispatch, useSelector } from 'react-redux';
import { setState } from '../../redux/slices/PostAuthSlice';

const Auth = ({ forgot }) => {
  const [value, setValue] = useState({
    phone: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      dispatch(setState(value));
    }
  };
  const disabled = (value.phone + '').length >= 12 && value.password.length >= 4;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
