import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import arrow from '../../assets/icons/Arrow - Right 2.svg';
import styles from './Breadcrumbs.module.css';
import { setIdSpecialty, setNameSpecialty } from '../../redux/slices/GetDoctorsSlice';
import { setIdService, setNameService } from '../../redux/slices/GetClinicSlice';

function Breadcrumbs({ specialty, nameDoctors, id, service }) {
  const location = useLocation();
  const { city } = useSelector((state) => state.UIReducer);
  const { data } = useSelector((state) => state.GetProfileSlice);
  const path = location.pathname;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIdSpecialty(''));
    dispatch(setNameSpecialty(''));
    dispatch(setIdService(''));
    dispatch(setNameService(''));
  };

  const locationName = path.includes('/doctors')
    ? 'Врачи'
    : path.includes('/services')
    ? 'Услуги'
    : path.includes('/clinics')
    ? 'Клиники'
    : path.includes('/favorites')
    ? 'Избранные'
    : '';

  const locationNav =
    locationName === 'Врачи'
      ? '/doctors'
      : locationName === 'Услуги'
      ? '/services'
      : locationName === 'Клиники'
      ? '/clinics'
      : locationName === 'Избранные'
      ? '/favorites'
      : '';
  return (
    <div className={styles.wrapper}>
      <NavLink to={'/'}>{city === '1' ? 'Бишкек' : city === '2' ? 'Ош' : ''}</NavLink>
      <img src={arrow} alt="icon" />
      <NavLink to={locationNav} onClick={handleClick}>
        {locationName}
      </NavLink>
      {specialty ? (
        <>
          <img src={arrow} alt="icon" />
          <NavLink to={'/doctors'}>
            <span>{specialty}</span>
          </NavLink>
        </>
      ) : service ? (
        <>
          <img src={arrow} alt="icon" />
          <NavLink to={'/clinics'}>
            <span>{service}</span>
          </NavLink>
        </>
      ) : (
        ''
      )}
      {nameDoctors && (
        <>
          <img src={arrow} alt="icon" />
          <NavLink to={`/doctors/${data.id ?? ''}`}>
            <span>{nameDoctors}</span>
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
