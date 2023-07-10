import line from '../../assets/icons/Line 7.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionCityPop, setCity, closePopUp } from '../../redux/slices/UISlice';
import styles from './SelectCity.module.sass';
import location from '../../assets/icons/LocationHeader.svg';
import { getSpecialty } from '../../redux/slices/GetSpecialtySlice';

function SelectCity() {
  const dispatch = useDispatch();

  const { cityModal, city } = useSelector((state) => state.UIReducer);

  const changeLocation = (e) => {
    dispatch(setCity(e.target.value));
    dispatch(closePopUp(false));
  };

  const cityHandle = () => {
    dispatch(actionCityPop({ open: 'city' }));
  };

  return (
    <div className={styles.selects}>
      <div className={styles.selector}>
        <div className={styles.selectTitle} onClick={cityHandle}>
          <img src={location} alt="icon" />
          {city === '92b89611-4119-4936-8a60-61d25348ad26'
            ? 'Бишкек'
            : city === 'ca346822-2a3d-466f-84e7-a9ada2626ab8'
            ? 'Ош'
            : ''}
        </div>
        <div className={cityModal ? styles.selectBox : styles.none}>
          <div className={styles.option}>
            <input
              onChange={changeLocation}
              id={'1c'}
              value={'92b89611-4119-4936-8a60-61d25348ad26'}
              type={'checkbox'}
            />
            <label htmlFor={'1c'}>
              <p className={city === '92b89611-4119-4936-8a60-61d25348ad26' ? styles.select : ''}>
                Бишкек
              </p>
            </label>
            <hr />
            <input
              onChange={changeLocation}
              id={'2c'}
              value={'ca346822-2a3d-466f-84e7-a9ada2626ab8'}
              type={'checkbox'}
            />
            <label htmlFor={'2c'}>
              <p className={city === 'ca346822-2a3d-466f-84e7-a9ada2626ab8' ? styles.select : ''}>
                Ош
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCity;
