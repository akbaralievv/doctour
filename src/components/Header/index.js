import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.css';
import logo from '../../assets/icons/logo.svg';
import logoLogin from '../../assets/icons/Login.svg';

function Header() {
  const { t, i18n } = useTranslation();
  const changeTranslation = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.inner}>
          <div className={styles.logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
              <span>Doctour</span>
            </NavLink>
          </div>
          <div className={styles.nav}>
            <div className={styles.selects}>
              <select onChange={changeTranslation}>
                <option value="ru">Русский</option>
                <option value="kg">Киргизский</option>
              </select>
              <select>
                <option value="bishkek">Бишкек</option>
                <option value="osh">Ош</option>
              </select>
            </div>
            <ul className={styles.links}>
              <li>
                <NavLink to="/doctors">{t('doctors')}</NavLink>
              </li>
              <li>
                <NavLink to="/services">{t('services')}</NavLink>
              </li>
              <li>
                <NavLink to="/clinics">{t('clinics')}</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.nav_login}>
            <NavLink to="/login">
              <span>Войти</span>
              <img src={logoLogin} alt="icon" />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
