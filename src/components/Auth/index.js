import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Auth.module.css';
import InputPhone from '../ui/InputPhone';
import InputPassword from '../ui/InputPassword';

const Basic = () => {
  const [value, setValue] = useState({
    phone: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('996' + value.phone, value.password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Логин
        <InputPhone value={value.phone} setValue={setValue} />
      </label>
      <label>
        Пароль
        <InputPassword value={value.password} setValue={setValue} name="password" />
        <div className={styles.forgout}>
          <NavLink>Забыли пароль?</NavLink>
        </div>
      </label>
      <button
        type="submit"
        className={value.phone.length && value.password.length >= 4 ? '' : styles.disabled}>
        Войти
      </button>
    </form>
  );
};

export default Basic;
