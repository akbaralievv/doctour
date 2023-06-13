import React from 'react';

import SearchDoctors from '../../components/SearchDoctors';
import ListDoctors from '../../components/ListDoctors';
import TopDoctors from '../../components/TopDoctors';
import SliderCopy from '../../components/Slider';

import styles from './MainPage.module.css';

function MainPage() {
  return (
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
