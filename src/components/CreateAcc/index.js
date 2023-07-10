import React, { useEffect, useState } from 'react';

import styles from './CreateAcc.module.css';
import FullName from '../ui/inputs/FullName';
import Birthday from '../ui/inputs/Birthday';
import Gender from '../ui/inputs/Gender';
import Phone from '../ui/inputs/Phone';
import Password from '../ui/inputs/Password';
import ConfirmPassword from '../ui/inputs/ConfirmPassword';
import { useDispatch, useSelector } from 'react-redux';
import { postCreateAccSlice, clearData } from '../../redux/slices/PostCreateAccSlice';
import ModalSuccess from '../ModalSuccess';

function CreateAcc() {
  const { data, loading } = useSelector((state) => state.PostCreateAccSlice);
  const [value, setValue] = useState({
    phone_number: '',
    fullname: '',
    gender: '',
    birthday: '',
    password: '',
  });

  const [openModal, setOpenModal] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      document.body.style.overflow = 'hidden';
      setOpenModal(true);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      dispatch(postCreateAccSlice(value));
    }
  };

  const disabled =
    value.fullname &&
    value.phone_number &&
    value.password.length >= 4 &&
    confirmPassword === value.password &&
    value.birthday &&
    value.gender;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {openModal && <ModalSuccess setOpen={setOpenModal} text={data} />}
      <div>
        ФИО
        <FullName value={value.fullname} setValue={setValue} />
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
        <Phone value={value.phone_number} setValue={setValue} />
      </div>
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
      <button type="submit" className={!disabled ? styles.disabled : ''}>
        Создать аккаунт
      </button>
    </form>
  );
}

export default CreateAcc;
