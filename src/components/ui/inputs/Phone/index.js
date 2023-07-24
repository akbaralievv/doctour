import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './InputPhone.module.css';
import { clearErrorAuth } from '../../../../redux/slices/PostAuthSlice';
import { useDispatch } from 'react-redux';

function Phone({ value, setValue }) {
  const [valid, setValid] = useState(false);
  const handleBlur = () => {
    setValid(false);
  };
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // dispatch(clearErrorAuth(''));
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
  const defaultValue = value && typeof value === 'string' ? value.substring(3) : '';
  return (
    <>
      <div style={{ position: 'relative' }}>
        <InputMask
          required
          name="phone_number"
          mask="(999) 99 - 99 - 99"
          maskChar="_"
          placeholder="Номер телефона"
          defaultValue={defaultValue}
          autoComplete="phone_number"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${styles.phone} `}
        />
        <span className={styles.span}>+996</span>
      </div>
    </>
  );
}

export default Phone;
