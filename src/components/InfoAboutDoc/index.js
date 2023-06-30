import React, { useEffect, useState } from 'react';
import style from './InfoAboutDoc.module.sass';
import axios from 'axios';
import { useSelector } from 'react-redux';

function InfoAboutDoc({ data }) {
  return (
    <div className={style.infoAboutDoc}>
      <div className={style.container}>
        <div className={style.inner}>
          <div className={style.education}>
            {data.doctor_education?.length > 0 ? <h2>Образование</h2> : null}
            <div className={style.innerEdu}>
              {data.doctor_education?.map((edu) => (
                <div className={style.spans} key={edu.id}>
                  <div className={style.firstSpan}>
                    <span>{edu?.year}</span>
                  </div>
                  <div className={style.texts}>
                    <p>{edu.title}</p>
                    <span>{edu.specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.education}>
            {data.doctor_certificates?.length > 0 ? <h2>Сертификаты</h2> : null}
            <div className={style.innerEdu}>
              {data.doctor_certificates?.map((data) => (
                <div className={style.spans} key={data.id}>
                  <div className={style.firstSpan}>
                    <span style={{ width: '125px' }}>{data.year} год</span>
                  </div>
                  <div className={style.texts}>
                    <p>{data.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.education} style={{ height: '180px' }}>
            {data.doctor_experience?.length > 0 ? <h2>Опыт работы</h2> : null}
            <div className={style.innerEdu}>
              {data.doctor_experience?.map((data) => (
                <div className={style.spans} key={data.id}>
                  <div className={style.firstSpan}>
                    <span style={{ width: '125px' }}>{data.year} год</span>
                  </div>
                  <div className={style.texts}>
                    <p>{data.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: '180px' }} className={style.education}>
            {data.specialties?.length > 0 ? <h2>Специализация</h2> : null}
            <div className={style.innerEdu}>
              <ul style={{ marginLeft: '23px' }}>
                {data.specialties?.map((e) => (
                  <li key={e.id}>{e.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAboutDoc;
