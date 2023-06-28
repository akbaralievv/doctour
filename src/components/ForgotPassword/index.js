import React, { useState } from 'react';

import styles from './ForgotPassword.module.css';
import Phone from '../ui/inputs/Phone';

function ForgotPassword() {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.wrapper}>
      <h2>Восстановление пароля</h2>
      <p>Введите свою почту, мы отправим Вам по почте ссылку для сброса пароля</p>
      <form onSubmit={handleSubmit}>
        <div>
          Номер телефона
          <Phone value={value} setValue={setValue} />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
