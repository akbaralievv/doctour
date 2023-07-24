import React, { useEffect, useState } from 'react';
import style from './AboutDoctor.module.sass';

import img from '../../assets/images/img.png';
import heart from '../../assets/icons/Heart.svg';
import heartActive from '../../assets/icons/HeartActive.svg';

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
    localUpdate(!like);
    setLike(!like);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || { doctors: [], clinics: [] };
    const isLiked = favorites.doctors.find((favorite) => favorite.id === data.id);
    setLike(isLiked);
  }, [data]);

  useEffect(() => {
    if (like) {
      dispatch(setLikeSlice(true));
    } else {
      dispatch(setLikeSlice(false));
    }
  }, [like]);

  const localUpdate = (type) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {
      doctors: [],
      clinics: [],
    };

    let updatedFavorites = { ...favorites };

    if (type) {
      const existingIndex = favorites.doctors?.findIndex((favorite) => favorite.id === data.id);
      if (existingIndex === -1) {
        updatedFavorites = {
          ...favorites,
          doctors: [...favorites.doctors, data],
        };
      }
    } else {
      const filteredFavorites = favorites.doctors?.filter((favorite) => favorite.id !== data.id);
      updatedFavorites = {
        ...favorites,
        doctors: filteredFavorites,
      };
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

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
            <div className={style.heartWrapper}>
              <img
                src={like ? heartActive : heart}
                alt=""
                className={style.heart}
                onClick={handleLike}
              />
            </div>
          </div>
          <div className={style.infoInner}>
            <h2>{data.full_name}</h2>
            <h3>
              {data.specialties?.map((spec, index) => (
                <React.Fragment key={spec.slug}>
                  {spec.name}
                  {index !== data.specialties.length - 1 && ', '}
                </React.Fragment>
              ))}
            </h3>
            <div className={style.icons}>
              {data.clinic?.[0]?.address && (
                <div className={style.iconInner}>
                  <img src={location} alt="" />
                  <span>{data.clinic?.[0]?.address}</span>
                </div>
              )}
              {data.experience && (
                <div className={style.iconInner}>
                  <img src={pulse} alt="" />
                  <span>Стаж от {data.experience} лет</span>
                </div>
              )}
              {data.price && (
                <div className={style.iconInner}>
                  <img src={wallet} alt="" />
                  <span>Прием от {data.price} сомов</span>
                </div>
              )}
              {data.instagram && (
                <div className={style.iconInner}>
                  <img src={inst} alt="" />
                  <div>
                    <a href={data.instagram} target="_blanc">
                      {data.instagram}
                    </a>
                  </div>
                </div>
              )}
            </div>
            <p className={style.summary}>{data.summary}</p>
          </div>
          <div className={style.reviews}>
            <div className={style.stars}>
              {stars
                ?.slice(0, 5)
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
