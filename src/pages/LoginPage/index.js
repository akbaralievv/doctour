import React, { useState } from 'react';

import styles from './LoginPage.module.css';
import google from '../../assets/icons/google.svg';
import Auth from '../../components/Auth';
import CreateAcc from '../../components/CreateAcc';
import { NavLink } from 'react-router-dom';

function LoginPage() {
  const [active, setActive] = useState(true);
  const handleClick = (isTrue) => {
    setActive(isTrue);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.auth_btns}>
              <NavLink
                className={`${styles.auth} ${active ? styles.active : ''}`}
                onClick={() => handleClick(true)}>
                Авторизация
              </NavLink>
              <NavLink
                className={`${styles.create} ${!active ? styles.active : ''}`}
                onClick={() => handleClick(false)}>
                Создать аккаунт
              </NavLink>
            </div>
            <div className={styles.container_inner}>
              {active ? <Auth /> : <CreateAcc />}
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
      </div>
    </>
  );
}

export default LoginPage;
