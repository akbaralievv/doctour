import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './WhatsApp.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import FullName from '../../components/ui/inputs/FullName';
import Birthday from '../../components/ui/inputs/Birthday';
import Gender from '../../components/ui/inputs/Gender';
import Phone from '../../components/ui/inputs/Phone';
import { postWhatsAppSlice } from '../../redux/slices/PostWhatsappSlice';

function WhatsAppPage() {
  const [value, setValue] = useState({
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
      console.log(value);
      // dispatch(postWhatsAppSlice(value))
    }
  };
  const { data } = useSelector((state) => state.GetProfileSlice);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Breadcrumbs />
          <h2>
            Записаться на прием к врачу <span>{data.full_name}</span>{' '}
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
