import React from 'react';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.blockError}>
        <h1>404</h1>
        <p>Ой, страница не найдена</p>
      </div>
    </div>
  );
}

export default ErrorPage;
