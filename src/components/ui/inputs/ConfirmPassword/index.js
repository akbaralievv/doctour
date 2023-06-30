import React, { useState } from 'react';

import styles from './Confirm.module.css';
import eyeShow from '../../../../assets/icons/Show.svg';
import eyeHide from '../../../../assets/icons/Hide.svg';

function ConfirmPassword({ value, setValue, name, style }) {
  const [eye, setEye] = useState(true);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
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
          onChange={handleChange}
          minLength={4}
          required
          type={eye ? 'password' : 'text'}
          autoComplete="current-password"
          placeholder="Пароль"
          className={!style ? styles.valid : ''}
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

export default ConfirmPassword;
