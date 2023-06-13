import React, { useState } from 'react';

import styles from './SearchForm.module.css';

function SearchForm({ placeholder, style }) {
  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <form method="get" action="#">
            <input type="text" placeholder={placeholder} />
            <button>Найти</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
