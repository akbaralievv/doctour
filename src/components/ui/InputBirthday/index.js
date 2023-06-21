import React from 'react';
import Select from 'react-select';
import { useState } from 'react';

import styles from './InputBirthday.module.css';
import down from '../../../assets/icons/Down 2.svg';

function InputBirthday() {
  const [open, setOpen] = useState({
    day: false,
    month: false,
    year: false,
  });

  const dayOptions = Array.from({ length: 31 }, (_, index) => String(index + 1));
  const monthOptions = Array.from({ length: 12 }, (_, index) => String(index + 1));
  const yearOptions = Array.from({ length: 124 }, (_, index) => String(2023 - index));

  const handleClick = (e) => {
    setOpen((prev) => ({
      day: e === 'day' ? !prev.day : false,
      month: e === 'month' ? !prev.month : false,
      year: e === 'year' ? !prev.year : false,
    }));
  };
  console.log(open.day);
  return (
    <div className={styles.wrapper}>
      <label onClick={() => handleClick('day')}>
        <input type="text" readOnly placeholder="День" />
        <img src={down} alt="icon" />
      </label>
      <label onClick={() => handleClick('month')}>
        <input type="text" readOnly placeholder="Месяц" />
        <img src={down} alt="icon" />
      </label>
      <label onClick={() => handleClick('year')}>
        <input type="text" readOnly placeholder="Год" />
        <img src={down} alt="icon" />
      </label>
    </div>
  );
}

export default InputBirthday;
