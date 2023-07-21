import React, { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import { postConfirm } from '../../redux/slices/PostConfirmSlice';
import styles from './PinCode.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PreloadBtn from '../PreloadBtn/PreloadBtn';
import { useNavigate } from 'react-router-dom';
import { clearData } from '../../redux/slices/PostConfirmSlice';
import ModalSuccess from '../ModalSuccess';
import { postResetCode } from '../../redux/slices/PostResetCodeSlice';

function PinCode({ setPinCode, text, setOpenModal, pinCode }) {
  const { loading, data, error } = useSelector((state) => state.PostConfirmSlice);
  const { error: resetError, loading: resetLoading } = useSelector(
    (state) => state.PostResetCodeSlice,
  );
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pinCode.purpose === 'createAcc') {
      const obj = { code: +value.replace(/\D/g, '') };
      dispatch(postConfirm(obj));
    } else if (pinCode.purpose === 'resetPassword') {
      const obj = { code: value.replace(/\D/g, '') };
      dispatch(postResetCode(obj));
    }
    setValue('');
  };

  useEffect(() => {
    if (data) {
      setPinCode(false);
      dispatch(clearData(''));
      setOpenModal((prev) => ({
        ...prev,
        isTrue: true,
        text: 'Аккаунт создан. Теперь авторизуйтесь',
      }));
    }
  }, [data]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const validate = loading || value.replace(/\D/g, '').length !== 6;

  return (
    <div className={styles.wrapper}>
      <h2>{text}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          СМС код
          <InputMask
            required
            name="phone_number"
            mask="99 - 99 - 99"
            maskChar="_"
            placeholder="Код из СМС"
            autoComplete="phone_number"
            value={value}
            onChange={handleChange}
            className={`${styles.phone} `}
          />
          {(error || resetError) && !value ? (
            <span style={{ color: 'red' }}>Неверный код</span>
          ) : (
            ''
          )}
        </div>
        <button
          type="submit"
          disabled={validate}
          className={
            value.replace(/\D/g, '').length !== 6 && (!loading || !resetLoading)
              ? styles.disabled
              : ''
          }>
          {loading || resetLoading ? <PreloadBtn /> : 'Отправить'}
        </button>
      </form>
    </div>
  );
}

export default PinCode;
