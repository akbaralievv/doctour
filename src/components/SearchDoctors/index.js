import React, { useState } from 'react';
import styles from './SearchDoctors.module.css';
import img from '../../assets/images/mainPageImg.png';
import { ReactComponent as Arrow } from '../../assets/icons/StrokeDown.svg';

function SearchDoctors() {
  const [state, setState] = useState('Выберите категорию');
  const [state2, setState2] = useState('Бишкек');

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = () => setOpen(!open);
  const handleClick2 = () => setOpen2(!open2);

  const arr = [
    'Аллерголог',
    'Андролог',
    'Венеролог',
    'Гастроэнтеролог',
    'Гинеколог',
    'Дерматолог',
    'Иммунолог',
    'Диетолог',
    'Кардиолог',
    'Косметолог',
    'ЛОР',
  ];
  const arr2 = [
    'Кара-Балта',
    'Токмок',
    'Кант',
    'Балыкчи',
    'Чолпон-Ата',
    'Каракол',
    'Ош',
    'Нарын',
    'Талас',
    'Баткен',
    'Джалал-Абад',
  ];

  const changeValue = async (event) => {
    await setState(event.target.innerText);
    await setOpen(false);
  };

  const changeValue2 = async (event) => {
    await setState2(event.target.innerText);
    await setOpen2(false);
  };

  return (
    <div className={styles.searchDoctor}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <h1>Сервис по поиску лучших врачей по Кыргызстану</h1>
          </div>
          <div className={styles.right}>
            <img src={img} alt="img" />
          </div>
        </div>
        <form action="#" className={styles.footer}>
          {/* <== SELECT-LEFT */}
          <div className={styles.select}>
            <div
              onClick={handleClick}
              className={`${styles.input} ${open ? styles.activeSelect : styles.disabledSelect}`}
              onBlur={() => setOpen(false)}>
              <span onChange={changeValue}>{state}</span>
              <button className={styles.accord__btn}>
                <Arrow className={open ? styles.arrow : styles.disabledArrow} />
              </button>
            </div>
            <div
              className={`${styles.dropDown} ${
                open ? styles.activeDropDown : styles.disabledDropDown
              }`}>
              <ul className={styles.list}>
                {arr.map((i, k) => (
                  <li className={styles.itemm} key={k} onClick={changeValue}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* SELECT-RIGHT ==> */}
          <div className={styles.select}>
            <div
              onClick={handleClick2}
              className={`${styles.input} ${open2 ? styles.activeSelect : styles.disabledSelect}`}
              onBlur={() => setOpen2(false)}>
              <span onChange={changeValue2}>{state2}</span>
              <button className={styles.accord__btn}>
                <Arrow className={open2 ? styles.arrow : styles.disabledArrow} />
              </button>
            </div>
            <div
              className={`${styles.dropDown} ${
                open2 ? styles.activeDropDown : styles.disabledDropDown
              }`}>
              <ul className={styles.list}>
                {arr2.map((i, k2) => (
                  <li className={styles.itemm} key={k2} onClick={changeValue2}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button type="submit" className={styles.btn}>
            Найти
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchDoctors;