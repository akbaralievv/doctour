import React, { useEffect, useState } from 'react';
import CardDoctor from '../../components/CardDoctor';
import { useSelector } from 'react-redux';

import styles from './FavoritesPage.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import ellipse from '../../assets/icons/Ellipse 24.svg';
import CardClinic from '../../components/CardClinic';

function FavoritesPage() {
  const [data, setData] = useState([]);
  const { state } = useSelector((state) => state.favoritesSlice);
  useEffect(() => {
    setData(
      JSON.parse(localStorage.getItem('favorites')) || {
        doctors: [],
        clinics: [],
      },
    );
  }, [state]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Breadcrumbs />
          <h2>
            Избранные <img src={ellipse} alt="ellipse" />{' '}
            {data.doctors?.length + data.clinics?.length}
          </h2>
          {data.doctors?.map((item) => (
            <CardDoctor key={item.id} data={item} />
          ))}
          {data.clinics?.map((item) => (
            <CardClinic key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
