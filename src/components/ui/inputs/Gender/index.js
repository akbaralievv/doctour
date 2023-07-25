import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

import styles from './InputGender.module.sass';
import down from '../../../../assets/icons/Down 2.svg';

function Gender({ value, setValue }) {
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, gender: e }));
  };
  const ref = useRef();

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target) && !e.target.closest(`.${styles.wrapper}`)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleInputClick = (e) => {
    e.stopPropagation(); // Предотвращаем всплытие события на внешние элементы
    setOpen(!open);
  };

  const gender = ['Мужчина', 'Женщина', 'Другое'];

  return (
    <div className={styles.wrapper}>
      <label>
        <input
          required
          readOnly
          type="text"
          name="gender"
          value={value}
          placeholder="Другое"
          className={open ? styles.open : ''}
          onClick={handleInputClick}
        />
        <img src={down} alt="arrow" className={open ? styles.down : ''} />
        {open && (
          <ul className={styles.options} ref={ref}>
            {gender.map((name, id) => (
              <li key={id} onClick={() => handleChange(name)}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </label>
    </div>
  );
}

export default Gender;
