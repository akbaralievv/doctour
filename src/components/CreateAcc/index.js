import React, { useEffect, useState } from 'react';

import styles from './CreateAcc.module.css';
import InputPhone from '../ui/InputPhone';
import InputPassword from '../ui/InputPassword';
import InputBirthday from '../ui/InputBirthday';

function CreateAcc() {
  const [value, setValue] = useState({
    fullName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    gender: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };
  return (
    <form className={styles.form}>
      <label>
        ФИО
        <input type="text" name="fullName" onChange={handleChange} />
      </label>
      {/* <label>
        Дата рождения
        <input type="text" name="birthday" onChange={handleChange} />
      </label> */}
      <label>
        Дата рождения
        <InputBirthday />
      </label>
      <label>
        Пол
        <label>
          <input type="checkbox" name="gender" onChange={handleChange} />
          Мужской
        </label>
        <label>
          <input type="checkbox" name="gender" onChange={handleChange} />
          Женский
        </label>
      </label>
      <label>
        Номер телефона
        <InputPhone value={value.phone} setValue={setValue} />
      </label>
      <label>
        Создать пароль
        <InputPassword value={value.password} setValue={setValue} name="password" />
      </label>
      <label>
        Повторить пароль
        <InputPassword value={value.confirmPassword} setValue={setValue} name="confirmPassword" />
      </label>
      <button type="submit">Создать аккаунт</button>
    </form>
  );
}

export default CreateAcc;
