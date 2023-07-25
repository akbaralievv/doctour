import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './ServicesPage.module.css';
import { getServices } from '../../redux/slices/GetServicesSlice';
import { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader';
import NotFound from '../../components/NotFound';
import { setIdService, setNameService } from '../../redux/slices/GetClinicSlice';
import { setSearch } from '../../redux/slices/GetGlobalSearch';

function ServicesPage() {
  const { data, loading, error } = useSelector((state) => state.GetServicesSlice);
  const { city } = useSelector((state) => state.UIReducer);

  const dispatch = useDispatch();

  const handleClick = (id, name) => {
    dispatch(setIdService(id));
    dispatch(setNameService(name));
    dispatch(setSearch(''));
  };

  useEffect(() => {
    dispatch(getServices(city));
    window.scrollTo(0, 0);
  }, [city]);

  const services = loading ? (
    <Preloader />
  ) : error ? (
    <NotFound style={{ height: 'calc(100vh - 220px)' }} />
  ) : (
    data?.map((service) => (
      <div key={service.slug}>
        <h2>{service.name}</h2>
        <ul>
          {service.subservice_service?.map((data) => (
            <li key={data.slug}>
              <NavLink to={'/clinics'} onClick={() => handleClick(data.id, data.name)}>
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    ))
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs />
        <div className={styles.inner}>{services}</div>
      </div>
    </div>
  );
}

export default ServicesPage;
