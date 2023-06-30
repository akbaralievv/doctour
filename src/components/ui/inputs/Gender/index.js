import React from 'react';

import styles from './InputGender.module.sass';

function Gender({ value, setValue }) {
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.wrapper}>
      <label>
        <input required type="radio" name="gender" value="Male" onChange={handleChange} />
        Мужской
      </label>
      <label>
        <input required type="radio" name="gender" value="Female" onChange={handleChange} />
        Женский
      </label>
    </div>
  );
}

export default Gender;
