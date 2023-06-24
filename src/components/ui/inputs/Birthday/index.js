import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import styles from './InputBirthday.module.css';
import down from '../../../../assets/icons/Down 2.svg';

function Birthday({ value, setValue }) {
  const [inputValue, setInputValue] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [open, setOpen] = useState({
    day: false,
    month: false,
    year: false,
  });
  const optionsRef = useRef();

  const birthday = ['day', 'month', 'year'];
  const dayOptions = Array.from({ length: 31 }, (_, index) => String(index + 1));
  const monthOptions = Array.from({ length: 12 }, (_, index) => String(index + 1));
  const yearOptions = Array.from({ length: 124 }, (_, index) => String(2023 - index));

  const handleClick = (e) => {
    const field = e.target.name;
    setOpen((prev) => ({
      day: field === 'day' ? !prev.day : false,
      month: field === 'month' ? !prev.month : false,
      year: field === 'year' ? !prev.year : false,
    }));
  };

  const handleChange = (e) => {
    setInputValue((prev) =>
      open.day
        ? { ...prev, day: e }
        : open.month
        ? { ...prev, month: e }
        : open.year
        ? { ...prev, year: e }
        : '',
    );
  };

  const handleClickOutside = (e) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(e.target) &&
      !e.target.closest(`.${styles.wrapper}`)
    ) {
      setOpen({
        day: false,
        month: false,
        year: false,
      });
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (inputValue.day && inputValue.month && inputValue.year) {
      setValue((prev) => ({
        ...prev,
        birthday: `${inputValue.year}-${inputValue.month}-${inputValue.day}`,
      }));
    }
  }, [inputValue.day, inputValue.month, inputValue.year]);

  return (
    <div className={styles.wrapper}>
      {birthday.map((date, id) => (
        <label key={id}>
          <input
            required
            type="text"
            readOnly
            placeholder={
              date === 'day' ? 'День' : date === 'month' ? 'Месяц' : date === 'year' ? 'Год' : ''
            }
            name={date}
            onClick={handleClick}
            value={
              date === 'day'
                ? inputValue.day
                : date === 'month'
                ? inputValue.month
                : date === 'year'
                ? inputValue.year
                : ''
            }
            className={
              (date === 'day' && open.day) ||
              (date === 'month' && open.month) ||
              (date === 'year' && open.year)
                ? styles.open
                : ''
            }
          />
          <img
            src={down}
            alt="icon"
            className={
              (date === 'day' && open.day) ||
              (date === 'month' && open.month) ||
              (date === 'year' && open.year)
                ? styles.down
                : ''
            }
          />
          {(date === 'day'
            ? open.day
            : date === 'month'
            ? open.month
            : date === 'year'
            ? open.year
            : '') && (
            <ul className={styles.options} ref={optionsRef}>
              {(date === 'day'
                ? dayOptions
                : date === 'month'
                ? monthOptions
                : date === 'year'
                ? yearOptions
                : ''
              ).map((date, id) => (
                <li key={id} onClick={() => handleChange(date)}>
                  {date}
                </li>
              ))}
            </ul>
          )}
        </label>
      ))}
    </div>
  );
}

export default Birthday;
