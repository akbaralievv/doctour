import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../assets/icons/logo.svg';
import logoLogin from '../../assets/icons/Login.svg';
import SelectCity from '../SelectCity';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.inner}>
          <div className={styles.logo_nav}>
            <div className={styles.logo}>
              <NavLink to="/">
                <img src={logo} alt="logo" />
                <span>Doctour</span>
              </NavLink>
            </div>
            <div className={styles.nav}>
              <ul className={styles.links}>
                <li>
                  <NavLink
                    to="/doctors"
                    className={({ isActive }) => (isActive ? styles.active : '')}>
                    Врачи
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) => (isActive ? styles.active : '')}>
                    Услуги
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/clinics"
                    className={({ isActive }) => (isActive ? styles.active : '')}>
                    Клиники
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.select_login}>
            <SelectCity />
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
