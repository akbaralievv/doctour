import React, { useEffect, useState } from 'react';

import styles from './CreateNewPassword.module.css';
import Password from '../ui/inputs/Password';
import ConfirmPassword from '../ui/inputs/ConfirmPassword';
import PreloadBtn from '../PreloadBtn/PreloadBtn';
import { useDispatch, useSelector } from 'react-redux';
import { postNewPassword } from '../../redux/slices/PostNewPasswordSlice';
import ModalSuccess from '../ModalSuccess';
import { clearData } from '../../redux/slices/PostNewPasswordSlice';
import { clearDataReset } from '../../redux/slices/PostResetCodeSlice';

function CreateNewPassword({ setNewPassword, code, openModal, setOpenModal }) {
  const { data, loading } = useSelector((state) => state.PostNewPasswordSlice);
  const [value, setValue] = useState({
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const disabled = value.password.length >= 4 && value.password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      dispatch(postNewPassword({ code, value }));
    }
  };

  useEffect(() => {
    if (data.detail?.includes('успешно')) {
      setOpenModal((prev) => ({
        ...prev,
        isTrue: true,
        text: 'Ваш пароль успешно изменен',
      }));
      dispatch(clearData(''));
      dispatch(clearDataReset(''));
      setNewPassword(false);
    }
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <h2>Создание нового пароля</h2>
      {openModal.isTrue && <ModalSuccess setOpen={setOpenModal} text={openModal.text} />}
      <form onSubmit={handleSubmit}>
        <div>
          Создать пароль
          <Password value={value.password} setValue={setValue} name="password" />
        </div>
        <div>
          Повторить пароль
          <ConfirmPassword
            value={confirmPassword}
            setValue={setConfirmPassword}
            name="confirmPassword"
            style={confirmPassword === value.password ? true : false}
          />
        </div>
        <button type="submit" className={!disabled ? styles.disabled : ''} disabled={loading}>
          {loading ? <PreloadBtn /> : 'Изменить'}
        </button>
      </form>
    </div>
  );
}

export default CreateNewPassword;
