import React from 'react';
import InputMask from 'react-input-mask';

import styles from './PinCode.module.css';

function PinCode() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.wrapper}>
      <h2>Восстановление пароля</h2>
      <form onSubmit={handleSubmit}>
        <div>
          СМС код
          <InputMask
            required
            name="phone_number"
            mask="99 - 99 - 99"
            maskChar="_"
            placeholder="Код из СМС"
            autoComplete="phone_number"
            // onChange={handleChange}
            // onBlur={handleBlur}
            className={`${styles.phone} `}
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default PinCode;
