import React from 'react';

import styles from './NotFound.module.css';
import img from '../../assets/images/notFound.png';

function NotFound({ style }) {
  return (
    <div className={styles.wrapper} style={style}>
      <h2>Ничего не найдено</h2>
      <img src={img} alt="img" />
    </div>
  );
}

export default NotFound;
