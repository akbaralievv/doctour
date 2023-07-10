import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../assets/icons/logo.svg';
import logoLogin from '../../assets/icons/Login.svg';
import SelectCity from '../SelectCity';
import { useDispatch, useSelector } from 'react-redux';
import { setIdSpecialty, setNameSpecialty } from '../../redux/slices/GetDoctorsSlice';
import { setIdService, setNameService } from '../../redux/slices/GetClinicSlice';
import { removeAccessToken } from '../../redux/slices/PostAuthSlice';
import { setSearch } from '../../redux/slices/GetGlobalSearch';

function Header() {
  const { data, access_token } = useSelector((state) => state.PostAuthSlice);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIdSpecialty(''));
    dispatch(setNameSpecialty(''));
    dispatch(setIdService(''));
    dispatch(setNameService(''));
    dispatch(setSearch(''));
  };

  const logOut = () => {
    dispatch(removeAccessToken());
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.inner}>
          <div className={styles.logo_nav}>
            <div className={styles.logo}>
              <NavLink to="/">
                <img src={logo} alt="logo" />
                <span>DocTour</span>
              </NavLink>
            </div>
            <div className={styles.nav}>
              <ul className={styles.links}>
                <li>
                  <NavLink
                    to="/doctors"
                    onClick={handleClick}
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
                    onClick={handleClick}
                    className={({ isActive }) => (isActive ? styles.active : '')}>
                    Клиники
                  </NavLink>
                </li>
                <li className={styles.favoritesPage}>
                  <NavLink
                    to="/favorites"
                    className={({ isActive }) => (isActive ? styles.active : '')}>
                    Избранные
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.select_login}>
            <SelectCity />
            {access_token ? (
              <NavLink to="/login" onClick={logOut}>
                <span>Выйти</span>
                <img src={logoLogin} alt="icon" />
              </NavLink>
            ) : (
              <NavLink to="/login">
                <span>Войти</span>
                <img src={logoLogin} alt="icon" />
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
