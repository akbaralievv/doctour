import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import logo from '../../assets/icons/logo.svg';
import logoLogin from '../../assets/icons/Login.svg';
import stroke from '../../assets/icons/Arrow - Down 2.svg';
import stroke1 from '../../assets/icons/Arrow - Down 3.svg';
import line from '../../assets/icons/Line 7.svg';
import { useDispatch, useSelector } from 'react-redux';
import { actionLangPops, actionCityPop } from '../../redux/slices/UISlice';
import { closePopUp } from '../../redux/slices/UISlice';

function Header() {
  const dispatch = useDispatch();
  const { langPopUp } = useSelector((state) => state.UIReducer);
  const { cityModal } = useSelector((state) => state.UIReducer);

  const [currentLanguage, setCurrentLanguage] = useState('Русский');
  const [currentCity, setCurrentCity] = useState('Бишкек');

  const { t, i18n } = useTranslation();
  const changeTranslation = (e) => {
    if (e.target.value === 'ru') {
      setCurrentLanguage('Русский');
    }
    if (e.target.value === 'kg') {
      setCurrentLanguage('Кыргызский');
    }
    i18n.changeLanguage(e.target.value);
  };
  const changeLocation = (e) => {
    if (e.target.value === 'osh') {
      setCurrentCity('Ош');
    }
    if (e.target.value === 'bishkek') {
      setCurrentCity('Бишкек');
    }
  };

  const languageHandle = () => {
    dispatch(actionLangPops({ open: 'lang', close: 'city' }));
  };
  const cityHandle = () => {
    dispatch(actionCityPop({ open: 'city', close: 'lang' }));
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
            <ul className={styles.links}>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
                  {t('main')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctors"
                  className={({ isActive }) => (isActive ? styles.active : '')}>
                  {t('doctors')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? styles.active : '')}>
                  {t('services')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clinics"
                  className={({ isActive }) => (isActive ? styles.active : '')}>
                  {t('clinics')}
                </NavLink>
              </li>
            </ul>
            <div className={styles.selects}>
              <div className={styles.selector}>
                <div className={styles.selectTitle} onClick={languageHandle}>
                  {currentLanguage}
                  <img src={langPopUp ? stroke1 : stroke} />
                </div>
                <div className={langPopUp ? styles.selectBox : styles.none}>
                  <div className={styles.line}>
                    <img src={line} />
                  </div>
                  <div className={styles.option}>
                    <input onChange={changeTranslation} id={'kgl'} value={'kg'} type={'checkbox'} />
                    <label htmlFor={'kgl'}>
                      <p style={currentLanguage === 'Кыргызский' ? {} : { color: '#023246' }}>
                        Кыргызский
                      </p>
                    </label>
                    <input onChange={changeTranslation} id={'rul'} value={'ru'} type={'checkbox'} />
                    <label htmlFor={'rul'}>
                      <p style={currentLanguage === 'Русский' ? {} : { color: '#023246' }}>
                        Русский
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.selector}>
                <div className={styles.selectTitle} onClick={cityHandle}>
                  {currentCity}
                  <img src={cityModal ? stroke1 : stroke} />
                </div>
                <div className={cityModal ? styles.selectBox : styles.none}>
                  <div className={styles.line}>
                    <img src={line} />
                  </div>
                  <div className={styles.option}>
                    <input
                      onChange={changeLocation}
                      id={'bishkekc'}
                      value={'bishkek'}
                      type={'checkbox'}
                    />
                    <label htmlFor={'bishkekc'}>
                      <p style={currentCity === 'Бишкек' ? {} : { color: '#023246' }}>Бишкек</p>
                    </label>
                    <input onChange={changeLocation} id={'oshc'} value={'osh'} type={'checkbox'} />
                    <label htmlFor={'oshc'}>
                      <p style={currentCity === 'Ош' ? {} : { color: '#023246' }}>Ош</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
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
