import { useSelector, useDispatch } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './ServicesPage.module.css';
import { NavLink } from 'react-router-dom';
import { getServices } from '../../redux/slices/GetServicesSlice';
import { useEffect } from 'react';

function ServicesPage() {
  const { data } = useSelector((state) => state.GetServicesSlice);
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.UIReducer);

  useEffect(() => {
    dispatch(getServices(city));
  }, [city]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs />
        <div className={styles.inner}>
          {data?.map((service, id) => (
            <div key={id}>
              <h2>{service.title}</h2>
              <ul>
                {service.data?.map((data, id) => (
                  <li key={id}>
                    <NavLink>{data.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
