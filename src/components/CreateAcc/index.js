import React, { useState } from 'react';

import styles from './CreateAcc.module.css';
import FullName from '../ui/inputs/FullName';
import Birthday from '../ui/inputs/Birthday';
import Gender from '../ui/inputs/Gender';
import Phone from '../ui/inputs/Phone';
import Password from '../ui/inputs/Password';
import ConfirmPassword from '../ui/inputs/ConfirmPassword';
import { useDispatch, useSelector } from 'react-redux';
import { setState } from '../../redux/slices/PostCreateAccSlice';

function CreateAcc() {
  const { state } = useSelector((state) => state.PostCreateAccSlice);
  const [value, setValue] = useState({
    fullName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      dispatch(setState(value));
    }
  };
  const disabled =
    value.fullName &&
    value.phone &&
    value.password.length >= 4 &&
    value.confirmPassword === value.password &&
    value.birthday &&
    value.gender;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        ФИО
        <FullName value={value.fullName} setValue={setValue} />
      </div>
      <div>
        Дата рождения
        <Birthday value={value.birthday} setValue={setValue} />
      </div>
      <div>
        Пол
        <Gender value={value.gender} setValue={setValue} />
      </div>
      <div>
        Номер телефона
        <Phone value={value.phone} setValue={setValue} />
      </div>
      <div>
        Создать пароль
        <Password value={value.password} setValue={setValue} name="password" />
      </div>
      <div>
        Повторить пароль
        <ConfirmPassword
          value={value.confirmPassword}
          setValue={setValue}
          name="confirmPassword"
          style={value.confirmPassword === value.password ? true : false}
        />
      </div>
      <button type="submit" className={!disabled ? styles.disabled : ''}>
        Создать аккаунт
      </button>
    </form>
  );
}

export default CreateAcc;
