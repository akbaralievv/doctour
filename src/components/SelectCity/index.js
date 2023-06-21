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
          {city === 'bishkek' ? 'Бишкек' : city === 'osh' ? 'Ош' : ''}
        </div>
        <div className={cityModal ? styles.selectBox : styles.none}>
          <div className={styles.line}>
            <img src={line} />
          </div>
          <div className={styles.option}>
            <input onChange={changeLocation} id={'bishkekc'} value={'bishkek'} type={'checkbox'} />
            <label htmlFor={'bishkekc'}>
              <p style={city === 'bishkek' ? {} : { color: '#023246' }}>Бишкек</p>
            </label>
            <input onChange={changeLocation} id={'oshc'} value={'osh'} type={'checkbox'} />
            <label htmlFor={'oshc'}>
              <p style={city === 'osh' ? {} : { color: '#023246' }}>Ош</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCity;
