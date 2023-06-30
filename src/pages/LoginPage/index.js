import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './LoginPage.module.css';
import Auth from '../../components/Auth';
import CreateAcc from '../../components/CreateAcc';
import { NavLink } from 'react-router-dom';
import ForgotPassword from '../../components/ForgotPassword';
import CreateNewPassword from '../../components/CreateNewPassword';
import { useEffect } from 'react';
import { setSuccess } from '../../redux/slices/PostCreateAccSlice';

function LoginPage() {
  const { data } = useSelector((state) => state.PostCreateAccSlice);
  const [active, setActive] = useState(true);
  const [forgot, setForgot] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = (isTrue) => {
    setActive(isTrue);
  };
  const handleClickForgot = () => {
    setForgot(!forgot);
  };
  useEffect(() => {
    data ? setOpen(true) : setOpen(false);
  }, [data]);

  const dispatch = useDispatch();

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={`${styles.wrapper} ${open ? styles.modal : ''}`}>
        {open ? (
          <div className={styles.modal}>
            Ваш пароль успешно изменен<button onClick={closeModal}>X</button>
          </div>
        ) : (
          ''
        )}
        <div className={styles.container}>
          <div className={`${styles.inner} ${forgot && styles.forgot}`}>
            {!forgot ? (
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
            ) : (
              <ForgotPassword />
              // <CreateNewPassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
