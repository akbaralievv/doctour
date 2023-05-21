import React from 'react';
import style from './Pagination.module.sass'

import img from '../../assets/images/Rectangle3.jpg'
import call from '../../assets/icons/Pagination/Call.svg'
import location from '../../assets/icons/Pagination/Location.svg'

function Pagination() {

    const images = [img, img, img]
    const Icall = [call]
    const Ilocation = [location]

  return (
  <div className={style.pagination}>
    <div className={style.container}>
      <div className={style.inner}>
          {images.map((i , k) => <div className={style.blocks}>
            <div className={style.forImg}>
                <img src={i} alt="" key={k}/>
            </div>
            <h2>Медицинский центр Prime Clinic</h2>
            <p>Современная и удобная клиника в центре Бишкека. Предоставляет приём пациентов по широкому профилю медицинских услуг.</p>
            <div className={style.icons}>
                <div className={style.icon}>
                    {Icall.map((i, k) => <img src={i} alt="" key={k}/>)}
                    <span>Абдрахманова, 202</span>
                </div>
                <div className={style.icon}>
                    {Ilocation.map((i, k) => <img src={i} alt="" key={k}/>)}
                    <span>0 (312) 98-89-78</span>
                </div>
            </div>
        </div>)}
      </div>
    </div>
  </div>
  )
}

export default Pagination;
