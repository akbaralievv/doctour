import React, { useEffect, useState } from 'react';

import styles from './ForgotPassword.module.css';
import Phone from '../ui/inputs/Phone';
import { postResetPassword } from '../../redux/slices/PostResetPassword';
import { useDispatch, useSelector } from 'react-redux';
import PreloadBtn from '../PreloadBtn/PreloadBtn';
import ModalSuccess from '../ModalSuccess';

function ForgotPassword({ openModal, setOpenModal }) {
  const [value, setValue] = useState('');
  const { data, loading } = useSelector((state) => state.PostResetPassword);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postResetPassword(value));
  };
  useEffect(() => {
    if (data.error) {
      setOpenModal((prev) => ({
        ...prev,
        isTrue: true,
        text: data.error,
      }));
    }
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <h2>Восстановление пароля</h2>
      <p>Введите свою номер, мы отправим Вам по смс код для сброса пароля</p>
      {openModal.isTrue && <ModalSuccess setOpen={setOpenModal} text={openModal.text} />}
      <form onSubmit={handleSubmit}>
        <div>
          Номер телефона
          <Phone value={value} setValue={setValue} />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={value.phone_number?.length >= 12 ? '' : styles.disabled}>
          {loading ? <PreloadBtn /> : 'Отправить'}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
