import React, { useEffect, useState } from 'react';

import styles from './SearchDoctors.module.css';
import SearchForm from '../SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalSearch } from '../../redux/slices/GetGlobalSearch';

function SearchDoctors() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { city } = useSelector((state) => state.UIReducer);
  useEffect(() => {
    value && dispatch(getGlobalSearch({ value, city }));
  }, [value, city]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1>
            Сервис по <span>поиску</span> и <span>записи</span> к врачам
          </h1>
          <p>Найдите подходящего врача и быстро запишитесь на прием через Whatsapp</p>
          <SearchForm
            placeholder={'Врачи, услуги, клиники'}
            setGlobalValue={setValue}
            globalValue={value}
            mainPage={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchDoctors;
