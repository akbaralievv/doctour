import React, { useEffect, useState } from 'react';
import style from './InfoAboutDoc.module.sass';
import axios from 'axios';
import { useSelector } from 'react-redux';

function InfoAboutDoc({ data }) {
  return (
    <div className={style.infoAboutDoc}>
      <div className={style.container}>
        <div className={style.inner}>
          {data.doctor_education?.length > 0 && (
            <div className={style.education}>
              <h2>Образование</h2>
              <div className={style.innerEdu}>
                {data.doctor_education?.map((edu) => (
                  <div className={style.title} key={edu.id}>
                    <div className={style.year}>
                      <span>{edu?.year} год</span>
                    </div>
                    <div className={style.text}>
                      <p>{edu.title}</p>
                      <span>{edu.specialization}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.doctor_certificates?.length > 0 && (
            <div className={style.education}>
              <h2>Сертификаты</h2>
              <div className={style.innerEdu}>
                {data.doctor_certificates?.map((edu) => (
                  <div className={style.title} key={edu.id}>
                    <div className={style.year}>
                      <span>{edu?.year} год</span>
                    </div>
                    <div className={style.text}>
                      <p>{edu.title}</p>
                      <span>{edu.specialization}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.doctor_experience?.length > 0 && (
            <div className={style.education}>
              <h2>Опыт работы</h2>
              <div className={style.innerEdu}>
                {data.doctor_experience?.map((edu) => (
                  <div className={style.title} key={edu.id}>
                    <div className={style.year}>
                      <span>{edu?.year} год</span>
                    </div>
                    <div className={style.text}>
                      <p>{edu.title}</p>
                      <span>{edu.specialization}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.doctor_certificates?.length > 0 && (
            <div className={style.education}>
              <h2>Специализация</h2>
              <div className={style.innerEdu}>
                {data.doctor_certificates?.map((edu) => (
                  <div className={style.title} key={edu.id}>
                    <div className={style.year}>
                      <span>{edu?.year} год</span>
                    </div>
                    <div className={style.text}>
                      <p>{edu.title}</p>
                      <span>{edu.specialization}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoAboutDoc;
