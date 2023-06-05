import React, { useState } from 'react';

import styles from './CreateAcc.module.css';

function CreateAcc() {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  const validateEmail = (email, e = 'h@ma..ru') => {
    setEmail(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e));
    email.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={validateEmail}>
      <label>
        Фамилия
        <input type="text" />
      </label>
      <label>
        Имя
        <input type="text" />
      </label>
      <label>
        Отчество
        <input type="text" />
      </label>
      <label>
        Номер телефона
        <input type="number" />
      </label>
      <label>
        Почта
        <input type="email" className={!email ? styles.validate : ''} />
      </label>
      <label>
        Создать пароль
        <input type="password" />
      </label>
      <label>
        Повторить пароль
        <input type="password" />
      </label>
      <label>
        Пол
        <input type="text" />
      </label>
      <label>
        Дата рождения
        <input type="text" />
      </label>
      <button type="submit">Создать аккаунт</button>
    </form>
  );
}

export default CreateAcc;
