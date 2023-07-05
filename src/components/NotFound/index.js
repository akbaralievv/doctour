import React from 'react';

import styles from './NotFound.module.css';

function NotFound({ style }) {
  return (
    <div className={styles.wrapper} style={style}>
      Ничего не найдено
    </div>
  );
}

export default NotFound;
