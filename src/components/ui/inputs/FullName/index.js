import React from 'react';

import styles from './InputFullName.module.css';

function FullName({ value, setValue }) {
  const regex = /^[a-zA-Zа-яА-Я\s]*$/;

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (regex.test(inputValue)) {
      setValue((prev) => ({ ...prev, [e.target.name]: inputValue }));
    } else {
    }
  };

  return (
    <div className={styles.wrapper}>
      <input required type="text" name="fullName" onChange={handleChange} value={value} />
    </div>
  );
}

export default FullName;
