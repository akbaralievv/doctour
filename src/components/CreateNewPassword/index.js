import React, { useState } from 'react';

import styles from './CreateNewPassword.module.css';
import Password from '../ui/inputs/Password';
import ConfirmPassword from '../ui/inputs/ConfirmPassword';

function CreateNewPassword() {
  const [value, setValue] = useState({
    password: '',
    confirmPassword: '',
  });
  return (
    <div className={styles.wrapper}>
      <h2>Создание нового пароля</h2>
      <form>
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
        <button>Изменить</button>
      </form>
    </div>
  );
}

export default CreateNewPassword;
