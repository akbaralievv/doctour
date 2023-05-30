import React from 'react';

import styles from './LoginPage.module.css';
import google from '../../assets/icons/google.svg';
import Formik from '../../components/Formik';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.auth_btns}>
              <NavLink className={styles.auth}>Авторизация</NavLink>
              <NavLink className={styles.create}>Создать аккаунт</NavLink>
            </div>
            <div className={styles.entrance}>
              <p>или войти с помощью</p>
              <NavLink>
                <img src={google} alt="google" />
                <span>Войти через Google</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Formik />
    </>
  );
}

export default LoginPage;
