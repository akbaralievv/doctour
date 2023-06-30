import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './InputPhone.module.css';

function Phone({ value, setValue }) {
  const [valid, setValid] = useState(false);

  const handleBlur = () => {
    setValid(false);
  };

  const handleChange = (event) => {
    const phoneValue = event.target.value.split(' ').join('').replace(/\D/g, '');
    const phoneRegExp = /^\d{9}$/;
    if (phoneRegExp.test(phoneValue)) {
      setValue((prev) => ({ ...prev, [event.target.name]: `996${phoneValue}` }));
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
          name="phone_number"
          mask="(999) 99 - 99 - 99"
          maskChar="_"
          placeholder="Номер телефона"
          autoComplete="phone_number"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.phone} ${valid && styles.valid}`}
        />
        <span className={styles.span}>+996</span>
      </div>
      {valid && <span style={{ color: 'green' }}>Success</span>}
    </>
  );
}

export default Phone;
