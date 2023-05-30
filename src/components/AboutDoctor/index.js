import React from 'react';
import style from './AboutDoctor.module.sass'

import img from '../../assets/images/doctor7.jpg'
import heart from '../../assets/icons/Heart_doc.svg'

import heart2 from '../../assets/icons/about_doctors/heart_doc.svg'
import insta from '../../assets/icons/about_doctors/instagram_doc.svg'
import location from '../../assets/icons/about_doctors/Location.png'
import wallet from '../../assets/icons/about_doctors/Wallet.svg'

import stars from '../../assets/icons/stars.svg'

function AboutDoctor() {

  return (
      <div className={style.aboutDoctor}>
          <div className={style.container}>
                <div className={style.info}>
                    <div className={style.infoImg}>
                        <img src={img} alt="" className={style.imgOne}/>
                        <img src={heart} alt="" className={style.iconOne}/>
                    </div>
                    <div className={style.infoInner}>
                        <h2>Акылбекова Асель Мирлановна</h2>
                        <h3>кардиолог, врач функциональной диагностики</h3>
                        <div className={style.icons}>
                            <div className={style.iconInner}>
                                <img src={location} alt=""/>
                                <span>Лечебно-диагностический центр ЮРФА</span>
                            </div>
                            <div className={style.iconInner}>
                                <img src={heart2} alt=""/>
                                <span>Стаж 14 лет</span>
                            </div>
                            <div className={style.iconInner}>
                                <img src={wallet} alt=""/>
                                <span>Прием 900 сомов</span>
                            </div>
                            <div className={style.iconInner}>
                                <img src={insta} alt=""/>
                                <span><a href="">@akylbekova.a</a></span>
                            </div>
                        </div>
                        <p>Асель Мирланова - кардиолог, врач функциональной диагностики со стажем 14 лет. Проводит диагностику и лечение различных сердечно-сосудистой системы. Проводит УЗИ-диагностику сердца.</p>
                    </div>
                    <div className={style.reviews}>
                        <img src={stars} alt=""/>
                        <span className={style.score}>4.92</span>
                        <div className={style.innerReviews}>
                            <span>5 отзывов</span>
                        </div>
                        <div className={style.quantity}>
                            <p>Кол-во посетивших пациентов </p>
                            <span>-200-</span>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  );
}

export default AboutDoctor;
