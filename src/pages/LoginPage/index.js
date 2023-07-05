import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './LoginPage.module.css';
import Auth from '../../components/Auth';
import CreateAcc from '../../components/CreateAcc';
import { NavLink } from 'react-router-dom';
import ForgotPassword from '../../components/ForgotPassword';
import CreateNewPassword from '../../components/CreateNewPassword';
import { useEffect } from 'react';
import PinCode from '../../components/PinCode';
import ModalSuccess from '../../components/ModalSuccess';

function LoginPage() {
  const [active, setActive] = useState(true);
  const [forgot, setForgot] = useState(false);
  const handleClick = (isTrue) => {
    setActive(isTrue);
  };
  const handleClickForgot = () => {
    setForgot(!forgot);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={styles.container}>
          <div className={`${styles.inner} ${forgot && styles.forgot}`}>
            {forgot ? (
              <ForgotPassword />
            ) : (
              // <CreateNewPassword />
              // <PinCode />
              <>
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
                  {active ? <Auth forgot={handleClickForgot} /> : <CreateAcc />}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
