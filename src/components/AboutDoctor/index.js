import React, { useEffect, useState } from 'react';
import style from './AboutDoctor.module.sass';

import img from '../../assets/images/img.png';
import heart from '../../assets/icons/Heart.svg';

import pulse from '../../assets/icons/Pulse.svg';
import inst from '../../assets/icons/Inst.svg';
import location from '../../assets/icons/Location.svg';
import wallet from '../../assets/icons/Wallet.svg';
import star from '../../assets/icons/Star.svg';
import star0 from '../../assets/icons/Star0.svg';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectDoctor } from '../../redux/slices/DoctorsSlice';
import { setLikeSlice } from '../../redux/slices/favoritesSlice';

function AboutDoctor({ data }) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  const handleLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {
      doctors: [],
      clinics: [],
    };
    const isLiked = favorites.doctors?.some((favorite) => favorite.id === data.id);
    setLike(isLiked);
  }, [data]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {
      doctors: [],
      clinics: [],
    };

    if (like) {
      const existingIndex = favorites.doctors?.findIndex((favorite) => favorite.id === data.id);
      if (existingIndex === -1) {
        favorites.doctors.push(data);
      }
    } else {
      const filteredFavorites = favorites.doctors?.filter((favorite) => favorite.id !== data.id);
      favorites.doctors = filteredFavorites;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    dispatch(setLikeSlice(like));
  }, [like, data]);

  if (!data) {
    return null; // или можно отобразить загрузочный индикатор
  }

  const StarArray = (num) => {
    const stars = [];
    let count = 0;
    while (count < 5) {
      count = count + 1;
      if (count <= num) {
        stars.push('point');
      }
      if (count > num) {
        stars.push('zero');
      }
    }
    return stars;
  };

  const stars = StarArray(data.average_rating);
  const rating = data.average_rating || 0;
  const rating0 = 0;
  const rounded = Math.round(rating * 10) / 10;

  return (
    <div className={style.aboutDoctor}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.infoImg}>
            <img
              style={{ zIndex: -1, position: 'relative' }}
              src={data.photo}
              alt=""
              className={style.imgOne}
            />
            <img src={heart} alt="" className={style.iconOne} onClick={handleLike} />
          </div>
          <div className={style.infoInner}>
            <h2>{data.full_name}</h2>
            <h3>{data.specialties?.[0]?.name}</h3>
            <div className={style.icons}>
              <div className={style.iconInner}>
                <img src={location} alt="" />
                <span>{data.clinic?.[0]?.address}</span>
              </div>
              <div className={style.iconInner}>
                <img src={pulse} alt="" />
                <span>Стаж от {data.experience} лет</span>
              </div>
              <div className={style.iconInner}>
                <img src={wallet} alt="" />
                <span>Прием от {data.price} сомов</span>
              </div>
              <div className={style.iconInner}>
                <img src={inst} alt="" />
                <div>
                  <a href="">@akylbekova.a</a>
                </div>
              </div>
            </div>
            <p>{data.summary}</p>
          </div>
          <div className={style.reviews}>
            <div className={style.stars}>
              {stars
                .slice(0, 5)
                .map((e, id) =>
                  e === 'point' ? <img src={star} key={id} /> : <img src={star0} key={id} />,
                )}
            </div>
            <p className={style.score}>
              {rating > 0 ? <span>{rounded}</span> : <span>{rating0}</span>}
            </p>
            <div className={style.innerReviews}>
              <span>{data.num_reviews} отзывов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDoctor;
