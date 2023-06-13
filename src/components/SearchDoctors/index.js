import React, { useState } from 'react';

import styles from './SearchDoctors.module.css';
import SearchForm from '../SearchForm';

function SearchDoctors() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1>
            Сервис по <span>поиску</span> и <span>записи</span> к врачам
          </h1>
          <p>Найдите подходящего врача и быстро запишитесь на прием через Whatsapp</p>
          <SearchForm placeholder={'Врачи, услуги, клиники'} />
        </div>
      </div>
    </div>
  );
}

export default SearchDoctors;
