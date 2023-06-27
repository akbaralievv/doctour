import React, { useEffect, useState } from 'react';

import styles from './SearchForm.module.css';

function SearchForm({ placeholder, style, value, setValue }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(inputValue);
  };
  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <form method="get" action="#" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={placeholder}
              onChange={handleChange}
              value={inputValue}
            />
            <button>Найти</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
