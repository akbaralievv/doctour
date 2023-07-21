import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './WhatsApp.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import FullName from '../../components/ui/inputs/FullName';
import Birthday from '../../components/ui/inputs/Birthday';
import Gender from '../../components/ui/inputs/Gender';
import Phone from '../../components/ui/inputs/Phone';
import { postWhatsAppSlice } from '../../redux/slices/PostWhatsappSlice';
import { useLocation } from 'react-router-dom';

function WhatsAppPage() {
  const { nameSpecialty } = useSelector((state) => state.GetDoctorsSlice);
  const location = useLocation();
  const doctor = location.state ? location.state.split('/') : [];
  const [value, setValue] = useState({
    doctor: doctor[1],
    fullname: '',
    birthday: '',
    gender: '',
    phone_number: '',
  });

  const disabled =
    value.fullname && value.birthday && value.gender && value.phone_number ? true : false;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disabled) {
      // dispatch(postWhatsAppSlice(value));
      const text = `ФИО: ${value.fullname}%0AДень рождения: ${value.birthday}%0AПол: ${value.gender}%0AТелефон: ${value.phone_number}%20`;
      window.open(`https://api.whatsapp.com/send?phone=${996774434853}&text=${text}`, '_blank');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Breadcrumbs specialty={nameSpecialty} nameDoctors={doctor[0]} />
          <h2>
            Записаться на прием к врачу <span>{doctor[0]}</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <div>
                ФИО
                <FullName value={value.fullname} setValue={setValue} />
              </div>
              <div className={styles.birthday}>
                Дата рождения
                <Birthday value={value.birthday} setValue={setValue} />
              </div>
              <div className={styles.gender}>
                Пол
                <Gender value={value.gender} setValue={setValue} />
              </div>
              <div>
                Номер телефона
                <Phone value={value.phone_number} setValue={setValue} />
              </div>
            </div>
            <button type="submit" className={!disabled ? styles.disabled : ''}>
              Записаться через Whatsapp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppPage;
