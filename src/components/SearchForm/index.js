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
  const { data } = useSelector((state) => state.GetGlobalSearch);
  const [dataNames, setDataNames] = useState({
    clinics: [],
    doctor: [],
    Service: [],
    SubService: [],
    Speciality: [],
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
      Service: globalValue ? getNames(data?.Service) : [],
      SubService: globalValue ? getNames(data?.SubService) : [],
      Speciality: globalValue ? getNames(data?.Speciality) : [],
    }));

    Object.keys(data)?.length > 0 ? setNotFound(true) : setNotFound(false);
  }, [data, globalValue]);

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
    dispatch(setIdSpecialty(''));
    dispatch(setNameSpecialty(''));
    setGlobalValue && setGlobalValue('');
    handleNavigate();
  };

  const handleClickDoctor = (e) => {
    dispatch(setSearch(e));
    dispatch(setIdSpecialty(''));
    dispatch(setNameSpecialty(''));
    navigate('/doctors');
  };

  const handleClickClinic = (e) => {
    dispatch(setSearch(e));
    navigate('/clinics');
    dispatch(setIdSpecialty(''));
    dispatch(setNameSpecialty(''));
  };

  const handleClickService = (e) => {
    navigate('/services');
    dispatch(setIdSpecialty(''));
    dispatch(setNameSpecialty(''));
  };

  const handleClickSpeciality = (name) => {
    dispatch(setSearch(name));
    window.scrollTo({
      top: 888,
      behavior: 'smooth',
    });
  };

  const highlightText = (text) => {
    const regex = new RegExp(`(${inputValue})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (part === inputValue) {
        return (
          <span key={index} className={styles.highlight}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const options = [
    ...(dataNames.doctor || []).map((name) => (
      <li key={name + 'doctor'} onClick={() => handleClickDoctor(name)} name="1">
        {highlightText(name)}
        <span>(Врачи)</span>
      </li>
    )),
    ...(dataNames.clinics || []).map((name) => (
      <li key={name + 'clinic'} onClick={() => handleClickClinic(name)}>
        {highlightText(name)} <span>(Клиники)</span>
      </li>
    )),
    ...(dataNames.Service || []).map((name) => (
      <li key={name + 'service'} onClick={handleClickService}>
        {highlightText(name)} <span>(Услуги)</span>
      </li>
    )),
    ...(dataNames.SubService || []).map((name) => (
      <li key={name + 'service'} onClick={handleClickService}>
        {highlightText(name)} <span>(Услуги)</span>
      </li>
    )),
    ...(dataNames.Speciality || []).map((name) => (
      <li key={name + 'speciality'} onClick={() => handleClickSpeciality(name)}>
        {highlightText(name)} <span>(Специальности)</span>
      </li>
    )),
  ];

  const handleNavigate = () => {
    const name = options[0]?.key;
    if (mainPage) {
      name?.includes('clinic')
        ? navigate('/clinics')
        : name?.includes('doctor')
        ? navigate('/doctors')
        : name?.includes('service')
        ? navigate('/services')
        : name?.includes('speciality')
        ? handleClickSpeciality(name.replace('speciality', ''))
        : navigate('/');
    }
  };

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
