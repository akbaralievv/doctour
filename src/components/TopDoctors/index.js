import React from 'react';
import style from './TopDocrtors.module.sass';
import { Link } from 'react-router-dom';

import iconA from '../../assets/icons/TopDoctors/Terapevt.png';
import iconB from '../../assets/icons/TopDoctors/Dantist.png';
import iconC from '../../assets/icons/TopDoctors/Dermatolog.png';
import iconD from '../../assets/icons/TopDoctors/Okulist.png';
import iconE from '../../assets/icons/TopDoctors/Akusher.png';
import iconF from '../../assets/icons/TopDoctors/Psyhology.png';
import iconG from '../../assets/icons/TopDoctors/Cardiolog.png';
import iconH from '../../assets/icons/TopDoctors/Pediatr.png';

function TopDoctors() {
  const texts = [
    { title: 'Терапевт', img: iconA },
    { title: 'Кардиолог', img: iconG },
    { title: 'Педиатр', img: iconH },
    { title: 'Стоматолог', img: iconB },
    { title: 'Дерматолог', img: iconC },
    { title: 'Офтальмолог', img: iconD },
    { title: 'Акушер', img: iconE },
    { title: 'Невролог', img: iconF },
  ];
  return (
    <div className={style.topDoctors}>
      <div className={style.container}>
        <div className={style.inner}>
          <h2>Популярные специалисты</h2>
          <div className={style.topIcons}>
            <div className={style.icons}>
              {texts?.map((i, k) => (
                <Link to="/" key={k} className={style.block}>
                  <div>
                    <img className={style.img} key={k} src={i.img} alt="" />
                  </div>
                  <span>{i.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDoctors;
