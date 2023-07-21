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
import { clearData } from '../../redux/slices/PostConfirmSlice';

function LoginPage() {
  const { data, loading } = useSelector((state) => state.PostCreateAccSlice);
  const { data: phone } = useSelector((state) => state.PostResetPassword);
  const { data: codeData } = useSelector((state) => state.PostResetCodeSlice);
  const [active, setActive] = useState(true);
  const [forgot, setForgot] = useState(false);
  const [pinCode, setPinCode] = useState({
    isTrue: false,
    purpose: '',
  });
  const [openModal, setOpenModal] = useState({
    isTrue: false,
    text: '',
  });
  const [newPassword, setNewPassword] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    if (data.includes('Код для подтверждения пользователя отправлен вам на номер телефона')) {
      setPinCode((prev) => ({ ...prev, isTrue: true, purpose: 'createAcc' }));
      setNewPassword(false);
      setForgot(false);
    }
  }, [data]);

  useEffect(() => {
    if (phone.code) {
      setNewPassword(false);
      setForgot(false);
      setPinCode((prev) => ({ ...prev, isTrue: true, purpose: 'resetPassword' }));
    }
  }, [phone.code]);

  useEffect(() => {
    if (codeData.detail) {
      setNewPassword(true);
      setForgot(false);
      setPinCode(false);
      setCode(codeData.code);
    }
  }, [codeData.detail]);

  const handleClick = (isTrue) => {
    setActive(isTrue);
  };
  const handleClickForgot = () => {
    setForgot(!forgot);
    setNewPassword(false);
    setPinCode(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isForgot = forgot ? (
    <ForgotPassword openModal={openModal} setOpenModal={setOpenModal} />
  ) : pinCode.isTrue ? (
    <PinCode
      setPinCode={setPinCode}
      setOpenModal={setOpenModal}
      text="Подтверждение номера"
      pinCode={pinCode}
    />
  ) : newPassword ? (
    <CreateNewPassword
      setNewPassword={setNewPassword}
      code={code ?? ''}
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  ) : (
    <>
      <div className={styles.auth_btns}>
        {openModal.isTrue && <ModalSuccess setOpen={setOpenModal} text={openModal.text} />}
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
        {active ? <Auth forgot={handleClickForgot} /> : <CreateAcc setOpenModal={setOpenModal} />}
      </div>
    </>
  );

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={styles.container}>
          <div className={`${styles.inner} ${forgot && styles.forgot}`}>{isForgot}</div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
