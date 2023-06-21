import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import arrow from '../../assets/icons/Arrow - Right 2.svg';
import styles from './Breadcrumbs.module.css';

function Breadcrumbs({ style }) {
  const location = useLocation();
  const [path, setPath] = useState('');
  const { city } = useSelector((state) => state.UIReducer);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.wrapper} style={style}>
      <span>{city === 'bishkek' ? 'Бишкек' : city === 'osh' ? 'Ош' : ''}</span>
      <img src={arrow} alt="icon" />
      <span>
        {path === '/doctors'
          ? 'Врачи'
          : path === '/services'
          ? 'Услуги'
          : path === '/clinics'
          ? 'Клиники'
          : ''}
      </span>
    </div>
  );
}

export default Breadcrumbs;
