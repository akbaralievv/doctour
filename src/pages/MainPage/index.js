import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchDoctors from '../../components/SearchDoctors';
import ListDoctors from '../../components/ListDoctors';
import TopDoctors from '../../components/TopDoctors';
import SliderCopy from '../../components/Slider';
import Preloader from '../../components/Preloader';
import NotFound from '../../components/NotFound';
import { getSpecialty } from '../../redux/slices/GetSpecialtySlice.js';

import styles from './MainPage.module.css';

function MainPage() {
  const { loading, error } = useSelector((state) => state.GetSpecialtySlice);
  const { city } = useSelector((state) => state.UIReducer);
  const dispatch = useDispatch();
  const blockRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSpecialty());
  }, [city]);

  if (loading) {
    return <Preloader />;
  } else if (error) {
    return <NotFound style={{ height: 'calc(100vh - 100px)' }} />;
  }
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.section_inner}>
          <SearchDoctors blockRef={blockRef} />
          <TopDoctors />
        </div>
        <ListDoctors />
      </section>
      <SliderCopy />
    </div>
  );
}

export default MainPage;
