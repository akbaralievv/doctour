import { useSelector, useDispatch } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './ServicesPage.module.css';
import { NavLink } from 'react-router-dom';
import { getServices } from '../../redux/slices/GetServicesSlice';
import { useEffect, useState } from 'react';
import Preloader from '../../components/Preloader';
import NotFound from '../../components/NotFound';
import { setIdService, setNameService } from '../../redux/slices/GetClinicSlice';
import { setSearch } from '../../redux/slices/GetGlobalSearch';

function ServicesPage() {
  const { data, loading } = useSelector((state) => state.GetServicesSlice);
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.UIReducer);
  const [notFound, setNotFound] = useState(false);

  const handleClick = (id, name) => {
    dispatch(setIdService(id));
    dispatch(setNameService(name));
    dispatch(setSearch(''));
  };

  useEffect(() => {
    !loading && data?.length === 0 ? setNotFound(true) : setNotFound(false);
  }, [data]);

  useEffect(() => {
    dispatch(getServices(city));
  }, [city]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs />
        <div className={styles.inner}>
          {loading ? (
            <Preloader />
          ) : notFound ? (
            <NotFound style={{ height: 'calc(100vh - 160px)' }} />
          ) : (
            data?.map((service) => (
              <div key={service.id}>
                <h2>{service.name}</h2>
                <ul>
                  {service.subservice_service?.map((data) => (
                    <li key={data.id}>
                      <NavLink to={'/clinics'} onClick={() => handleClick(data.id, data.name)}>
                        {data.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
