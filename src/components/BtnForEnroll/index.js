import React from 'react';
import style from './BtnForEnroll.module.sass';
import { useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';

function BtnForEnroll({ data }) {
  const startWD = data?.clinic?.[0]?.starting_working_day;
  const startWDshort = startWD?.substr(0, 5);
  const endWD = data?.clinic?.[0]?.ending_working_day;
  const endWDshort = endWD?.substr(0, 5);

  return (
    <div className={style.btnForModal}>
      <div className={style.container}>
        <div className={style.inner}>
          <div className={style.leftBlock}>
            <div className={style.spanOne}>
              <span>Врач принимает по адресу:</span>
              <span>
                {data?.clinic?.[0]?.address}, {data?.clinic?.[0]?.title} клиника{' '}
              </span>
            </div>
            <div className={style.spanTwo}>
              <div className={style.firstSpan}>
                <span>График работы: </span>
              </div>
              <div className={style.spans}>
                <span>
                  <span style={{ color: '#1B6B93' }}>
                    {startWDshort} - {endWDshort}
                  </span>{' '}
                  по {data?.clinic?.[0]?.weekday}
                </span>
                <span>
                  <span style={{ color: '#1B6B93' }}>12:00 - 17:00</span> по{' '}
                  {data?.clinic?.[0]?.weekend}
                </span>
              </div>
            </div>
          </div>
          <NavLink
            to={`/doctors/${data.slug}/whatsapp`}
            state={data.full_name + '/' + data.id}
            // state={data.full_name}
            className={style.btn}>
            Записаться через Whatsapp
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BtnForEnroll;
