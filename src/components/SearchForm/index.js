import React, { useState, useRef, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';

import styles from './SearchForm.module.css';
import clearIcon from '../../assets/icons/clearSearch.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearch } from '../../redux/slices/GetGlobalSearch';
import { setIdSpecialty, setNameSpecialty } from '../../redux/slices/GetDoctorsSlice';
import SkeletonSearchOptions from '../SkeletonSearchOptions';

function SearchForm({ placeholder, setGlobalValue, globalValue, mainPage }) {
  const [inputValue, setInputValue] = useState('');
  const [notFound, setNotFound] = useState(false);
  const { data, loading, error } = useSelector((state) => state.GetGlobalSearch);
  const [searchBtn, setSearchBtn] = useState('');

  const [dataNames, setDataNames] = useState({
    clinics: [],
    doctor: [],
    serviceCategory: [],
  });
  const inputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getNames = (objects) => {
    return objects?.map((obj) => obj.title || obj.full_name || obj.name);
  };

  useEffect(() => {
    setDataNames((prev) => ({
      ...prev,
      clinics: globalValue ? getNames(data?.Clinics) : [],
      doctor: globalValue ? getNames(data?.Doctor) : [],
      serviceCategory: globalValue ? getNames(data?.ServiceCategory) : [],
    }));
    Object.keys(data)?.length > 0 ? setNotFound(true) : setNotFound(false);
    setSearchBtn(findFirstNonEmptyArrayKey(filteredData));
  }, [data, globalValue]);

  const desiredKeys = ['Clinics', 'Doctor', 'ServiceCategory'];
  const filteredData = Object.keys(data)
    .filter((key) => desiredKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
  const findFirstNonEmptyArrayKey = (obj) => {
    const keys = Object.keys(obj);
    for (let i = keys.length - 1; i >= 0; i--) {
      const key = keys[i];
      if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return key;
      }
    }
    return null;
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setGlobalValue && setGlobalValue(str);
    }, 1000),
    [],
  );

  const handleChange = (e) => {
    setInputValue(e.target.value.trim());
    updateSearchValue(e.target.value.trim());
    setNotFound(false);
  };

  const handleClickClear = () => {
    setInputValue('');
    setGlobalValue && setGlobalValue('');
    inputRef.current.focus();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(inputValue));
    setGlobalValue && setGlobalValue('');
    if (mainPage) {
      searchBtn === 'Clinics'
        ? navigate('/clinics')
        : searchBtn === 'Doctor'
        ? navigate('/doctors')
        : searchBtn === 'ServiceCategory'
        ? navigate('/services')
        : navigate('/');
    }
  };

  const handleClickDoctor = (e) => {
    const name = e.target.firstChild.textContent;
    dispatch(setSearch(name));
    dispatch(setIdSpecialty(''));
    dispatch(setNameSpecialty(''));
    navigate('/doctors');
  };

  const handleClickClinic = (e) => {
    const name = e.target.firstChild.textContent;
    dispatch(setSearch(name));
    navigate('/clinics');
  };

  const handleClickService = (e) => {
    navigate('/services');
  };

  const doctors = dataNames.doctor?.map((data, id) => (
    <li key={`doctor-${id}`} onClick={handleClickDoctor}>
      {data}
      <span>(Врачи)</span>
    </li>
  ));

  const clinics = dataNames.clinics?.map((data, id) => (
    <li key={`clinic-${id}`} onClick={handleClickClinic}>
      {data}
      <span>(Клиники)</span>
    </li>
  ));

  const services = dataNames.serviceCategory?.map((data, id) => (
    <li key={`service-${id}`} onClick={handleClickService}>
      {data}
      <span>(Услуги)</span>
    </li>
  ));

  const options = (doctors || []).concat(clinics || []).concat(services || []);
  const skeletons = [...new Array(5)].map((_, index) => <SkeletonSearchOptions key={index} />);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <form method="get" action="#" onSubmit={handleSubmit}>
            <div>
              <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                value={inputValue}
              />
              {inputValue && (
                <>
                  <img src={clearIcon} alt="clear" onClick={handleClickClear} />
                  {mainPage && (
                    <ul className={styles.options}>
                      {options?.length === 0 && notFound ? (
                        <li>Ничего не найдено</li>
                      ) : options?.length > 0 ? (
                        options
                      ) : (
                        skeletons
                      )}
                    </ul>
                  )}
                </>
              )}
            </div>
            <button>Найти</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
