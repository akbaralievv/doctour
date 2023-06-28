import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';
import logo from '../../assets/icons/logo.svg';
import telegram from '../../assets/icons/telegram.svg';
import instagram from '../../assets/icons/instagram.svg';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.inner}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <span>DocTour</span>
          </div>
          <ul className={styles.links}>
            <li>
              <NavLink to="/doctors">Врачи</NavLink>
            </li>
            <li>
              <NavLink to="/services">Услуги</NavLink>
            </li>
            <li>
              <NavLink to="/clinics">Клиники</NavLink>
            </li>
          </ul>
          <div className={styles.social}>
            <a href="#">
              <img src={telegram} alt="icon" />
            </a>
            <a href="#">
              <img src={instagram} alt="icon" />
            </a>
          </div>
        </nav>
        <p className={styles.copyright}>Copyright © 2023 All rights reserved - DocTour</p>
      </div>
    </footer>
  );
}

export default Footer;
