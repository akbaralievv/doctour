import React from 'react';
import { useSelector } from 'react-redux';

import SearchDoctors from '../../components/SearchDoctors';
import ListDoctors from '../../components/ListDoctors';
import TopDoctors from '../../components/TopDoctors';
import SliderCopy from '../../components/Slider';
import Preloader from '../../components/Preloader';

import styles from './MainPage.module.css';

function MainPage() {
  const { data, loading } = useSelector((state) => state.GetSpecialtySlice);

  return loading || data?.length === 0 ? (
    <Preloader />
  ) : (
    <div>
      <section className={styles.section}>
        <div className={styles.section_inner}>
          <SearchDoctors />
          <TopDoctors />
        </div>
        <ListDoctors />
      </section>
      <SliderCopy />
    </div>
  );
}

export default MainPage;
