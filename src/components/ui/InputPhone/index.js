import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './InputPhone.module.css';

function InputPhone({ value, setValue }) {
  const [valid, setValid] = useState(false);

  const handleOnBlurPhone = () => {
    setValid(false);
  };
  const handleChangePhone = (event) => {
    const phoneValue = event.target.value.split(' ').join('').replace(/\D/g, '');
    const phoneRegExp = /^\d{9}$/;
    if (phoneRegExp.test(phoneValue)) {
      setValue((prev) => ({ ...prev, [event.target.name]: phoneValue }));
      setValid(true);
    } else {
      setValue((prev) => ({ ...prev, [event.target.name]: '' }));
      setValid(false);
    }
  };
  return (
    <>
      <div style={{ position: 'relative' }}>
        <InputMask
          required
          name="phone"
          mask="(999) 99 - 99 - 99"
          maskChar="_"
          placeholder="Номер телефона"
          onChange={handleChangePhone}
          onBlur={handleOnBlurPhone}
          className={`${styles.phone} ${valid && styles.valid}`}
        />
        <span className={styles.span}>+996</span>
      </div>
      {valid && <span style={{ color: 'green' }}>Success</span>}
    </>
  );
}

export default InputPhone;
