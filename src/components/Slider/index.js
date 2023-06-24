import React from 'react';

import style from './Slider.module.css';

import appStore from '../../assets/images/app-store.png';
import googlePlay from '../../assets/images/google-play.png';
import ios from '../../assets/images/Mockup.png';

const SliderCopy = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.inner}>
          <div className={style.title}>
            <div>
              <h2>Запишитесь к врачу легко и быстро</h2>
              <p>вместе с мобильным приложением DocTour</p>
            </div>
            <span>Приложение доступно в</span>
            <div className={style.app}>
              <a href="/">
                <img src={appStore} alt="img" />
              </a>
              <a href="/">
                <img src={googlePlay} alt="img" />
              </a>
            </div>
          </div>
          <div className={style.images}>
            <img src={ios} alt="img" className={style.ios_img} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderCopy;
