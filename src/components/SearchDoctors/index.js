import React from 'react';
import styles from './SearchDoctors.module.css'
import img from '../../assets/images/mainPageImg.png'
import iconDown from '../../assets/icons/StrokeDown.svg'

function SearchDoctors() {

  return (
  <div className={styles.searchDoctor}>
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1>Сервис по поиску лучших врачей по Кыргызстану</h1>
        </div>
        <div className={styles.right}>
            <img src={img} alt="img"/>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.selectLeft}>
          <img src={iconDown} alt=""/>
        </div>
        <select name="" id="">
          <option value="null" >Выберите категорию</option>
          <option value="null" className={styles.optionsLeft}>Аллерголог</option>
          <option value="null" className={styles.optionsLeft}>Андролог</option>
          <option value="null" className={styles.optionsLeft}>Гастроэнтеролог</option>
          <option value="null" className={styles.optionsLeft}>Гинеколог</option>
          <option value="null" className={styles.optionsLeft}>Дерматолог</option>
          <option value="null" className={styles.optionsLeft}>Иммунолог</option>
          <option value="null" className={styles.optionsLeft}>Диетолог</option>
          <option value="null" className={styles.optionsLeft}>Кардиолог</option>
          <option value="null" className={styles.optionsLeft}>Косметолог</option>
          <option value="null" className={styles.optionsLeft}>ЛОР</option>
        </select>
        <select name="" id="">
          <option value="null">Бишкек</option>
          <option value="null" className={styles.optionsRight}>Токмок</option>
          <option value="null" className={styles.optionsRight}>Кант</option>
          <option value="null" className={styles.optionsRight}>Балыкчи</option>
          <option value="null" className={styles.optionsRight}>Чолпон-Ата</option>
          <option value="null" className={styles.optionsRight}>Каракол</option>
          <option value="null" className={styles.optionsRight}>Ош</option>
          <option value="null" className={styles.optionsRight}>Нарын</option>
          <option value="null" className={styles.optionsRight}>Талас</option>
          <option value="null" className={styles.optionsRight}>Баткен</option>
          <option value="null" className={styles.optionsRight}>Джалал-Абад</option>
        </select>
        <button className={styles.btn}>Найти</button>
      </div>
    </div>
  </div>
  );
}

export default SearchDoctors;
