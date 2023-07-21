import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import heart from '../../assets/icons/Heart.svg';
import heartActive from '../../assets/icons/HeartActive.svg';
import location from '../../assets/icons/Location.svg';
import pulse from '../../assets/icons/Pulse.svg';
import wallet from '../../assets/icons/Wallet.svg';
import inst from '../../assets/icons/Inst.svg';
import star0 from '../../assets/icons/Star0.svg';
import star from '../../assets/icons/Star.svg';
import arrowUp from '../../assets/icons/CardClinic/arrow-up.svg';
import arrowDown from '../../assets/icons/CardClinic/arrow-down.svg';

import Card from '../../assets/images/img.png';
import './module.css';
import { setLikeSlice } from '../../redux/slices/favoritesSlice';
import { selectDoctor, handleIds } from '../../redux/slices/DoctorsSlice';

function CardDoctor({ data }) {
  const [like, setLike] = useState(false);
  const [stars, setStar] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const auth = useSelector((state) => state.PostAuthSlice);
  const dispatch = useDispatch();

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

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

  useEffect(() => {
    setStar(StarArray(data.average_rating));
  }, [data.average_rating]);

  const CardClinicSubtitle = () => {
    if (expanded) {
      return (
        <div>
          <p>{data.summary}</p>
          <a onClick={handleClick}>
            Поменьше <img src={arrowUp} alt="arrow-up icon" />
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <p>{data.summary.slice(0, 100)}</p>
          {data.summary.length > 100 && (
            <a onClick={handleClick}>
              Подробнее <img src={arrowDown} alt="arrow-down icon" />
            </a>
          )}
        </div>
      );
    }
  };

  return (
    <>
      <div className={'container'}>
        <div className={'heart-wrapper'}>
          <img
            onClick={handleLike}
            className={'heart'}
            src={like ? heartActive : heart}
            alt="heart"
          />
        </div>
        <img className={'cardAvatar'} src={data.photo} alt="doctor" />
        <div className="info">
          <div className="left">
            <Link style={{ outline: 'none', textDecoration: 'none' }} to={`/doctors/${data.id}`}>
              <div className="full-name">
                <h2>{data.full_name}</h2>
              </div>
              <div className="speciality">
                {data.specialties.map((spec, index) => (
                  <React.Fragment key={spec.slug}>
                    {spec.name}
                    {index !== data.specialties.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </div>
              {data.clinic.length > 0 && (
                <div className="education">
                  <p>
                    <img src={location} alt="location" />
                    {data.clinic?.map(
                      (clinic) => `${clinic.address ? clinic.address + ', ' : ''}${clinic.title}`,
                    )}
                  </p>
                </div>
              )}
              <div className="mini-info">
                {data.experience && (
                  <div className="stage">
                    <p>
                      <img src={pulse} alt="experience" />
                      Стаж от {data.experience} лет
                    </p>
                  </div>
                )}
                {data.price && (
                  <div className="price">
                    <p>
                      <img src={wallet} alt="wallet" />
                      Прием от {data.price} сомов
                    </p>
                  </div>
                )}
                {data.instagram && (
                  <div className="instagram">
                    <p>
                      <img src={inst} alt="inst" />
                      {data.instagram}
                    </p>
                  </div>
                )}
              </div>
            </Link>
            {data.summary && (
              <div className="description">
                {data.summary?.length > 100 ? <CardClinicSubtitle /> : data.summary}
              </div>
            )}
          </div>
          <div className="right">
            <div className="rating">
              <div className="stars">
                {stars
                  .slice(0, 5)
                  .map((e, id) =>
                    e === 'point' ? (
                      <img src={star} key={id} alt="star" />
                    ) : (
                      <img src={star0} key={id} alt="star" />
                    ),
                  )}
              </div>
              {data.average_rating && <div className="rate">{data.average_rating?.toFixed(2)}</div>}
              <div className="feedback">
                <p>{data.num_reviews} отзывов</p>
              </div>
            </div>
            {auth.data ? (
              <Link to={'/whatsapp'} className={'btn'}>
                Записаться через WhatsApp
              </Link>
            ) : (
              <Link to={'/login'} className={'btn'}>
                Записаться через WhatsApp
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDoctor;
