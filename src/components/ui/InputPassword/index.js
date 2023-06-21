import React, { useState } from 'react';

import styles from './InputPassword.module.css';
import eyeShow from '../../../assets/icons/Show.svg';
import eyeHide from '../../../assets/icons/Hide.svg';

function InputPassword({ value, setValue, name }) {
  const [eye, setEye] = useState(true);

  const handleChangePassword = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleClickEye = (isTrue) => {
    setEye(isTrue);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          name={name}
          value={value}
          onChange={handleChangePassword}
          minLength={4}
          required
          type={eye ? 'password' : 'text'}
          autoComplete="current-password"
          placeholder="Пароль"
        />
        {eye ? (
          <img src={eyeHide} alt="icon" onClick={() => handleClickEye(false)} />
        ) : (
          <img src={eyeShow} alt="icon" onClick={() => handleClickEye(true)} />
        )}
      </div>
    </>
  );
}

export default InputPassword;
