import React from 'react';
import style from './style.module.sass'

import iconA from '../../assets/icons/TopDoctors/Vector.png'
import iconB from '../../assets/icons/TopDoctors/Dantist.png'
import iconC from '../../assets/icons/TopDoctors/Dermotolog.png'
import iconD from '../../assets/icons/TopDoctors/OKulist.png'
import iconE from '../../assets/icons/TopDoctors/Screenshot_15 1.png'
import iconF from '../../assets/icons/TopDoctors/Psyhology.png'


function TopDoctors() {
    const texts = [
        {title: 'Терапевт', img: iconA},
        {title: 'Стомотолог', img: iconB},
        {title: 'Дерматолог', img: iconC},
        {title: 'Офтальмолог', img: iconD},
        {title: 'Акушер', img: iconE},
        {title: 'Невролог', img: iconF}
    ]
  return (
      <div className={style.topDoctors}>TopDoctors
        <div className={style.container}>
          <div className={style.inner}>
            <h2>Популярные специалисты</h2>
              <div className={style.topIcons}>
                  <div className={style.icons}>
                      {texts?.map((i, k) => <div className={style.block}>
                          <div>
                              <img className={style.img} key={k} src={i.img} alt=""/>
                          </div>
                          <p>{i.title}</p>
                      </div> )}
                  </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default TopDoctors;
