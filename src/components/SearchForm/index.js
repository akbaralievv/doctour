import React, { useEffect, useState } from 'react';

import styles from './SearchForm.module.css';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../../redux/slices/GetDoctorsSlice';

function SearchForm({ placeholder, style, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <form method="get" action="#" onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} onChange={handleChange} value={value} />
            <button>Найти</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
