import line from '../../assets/icons/Line 7.svg';
import { useDispatch, useSelector } from 'react-redux';
import { actionCityPop, setCity } from '../../redux/slices/UISlice';
import styles from './SelectCity.module.sass';
import location from '../../assets/icons/LocationHeader.svg';

function SelectCity() {
  const dispatch = useDispatch();
  const { cityModal, city } = useSelector((state) => state.UIReducer);

  const changeLocation = (e) => {
    dispatch(setCity(e.target.value));
  };
  const cityHandle = () => {
    dispatch(actionCityPop({ open: 'city', close: 'lang' }));
  };

  return (
    <div className={styles.selects}>
      <div className={styles.selector}>
        <div className={styles.selectTitle} onClick={cityHandle}>
          <img src={location} alt="icon" />
          {city === '1' ? 'Бишкек' : city === '2' ? 'Ош' : ''}
        </div>
        <div className={cityModal ? styles.selectBox : styles.none}>
          <div className={styles.line}>
            <img src={line} />
          </div>
          <div className={styles.option}>
            <input onChange={changeLocation} id={'1c'} value={'1'} type={'checkbox'} />
            <label htmlFor={'1c'}>
              <p style={city === '1' ? {} : { color: '#023246' }}>Бишкек</p>
            </label>
            <input onChange={changeLocation} id={'2c'} value={'2'} type={'checkbox'} />
            <label htmlFor={'2c'}>
              <p style={city === '2' ? {} : { color: '#023246' }}>Ош</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCity;
