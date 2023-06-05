import React from 'react';
import style from './TopDocrtors.module.sass';

import iconA from '../../assets/icons/TopDoctors/Terapevt.svg';
import iconB from '../../assets/icons/TopDoctors/Dantist.svg';
import iconC from '../../assets/icons/TopDoctors/Dermotolog.svg';
import iconD from '../../assets/icons/TopDoctors/OKulist.svg';
import iconE from '../../assets/icons/TopDoctors/Akusher.svg';
import iconF from '../../assets/icons/TopDoctors/Psyhology.svg';

function TopDoctors() {
  const texts = [
    { title: 'Терапевт', img: iconA },
    { title: 'Стомотолог', img: iconB },
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
                <div key={k} className={style.block}>
                  <div>
                    <img className={style.img} key={k} src={i.img} alt="" />
                  </div>
                  <span>{i.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDoctors;
