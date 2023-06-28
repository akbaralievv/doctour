import { useState } from 'react';
import styles from './CardClinic.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import location from '../../assets/icons/CardClinic/Location.svg';
import discovery from '../../assets/icons/CardClinic/Discovery.svg';
import time from '../../assets/icons/CardClinic/Time-Circle.svg';
import call from '../../assets/icons/CardClinic/Calling.svg';
import arrowUp from '../../assets/icons/CardClinic/arrow-up.svg';
import arrowDown from '../../assets/icons/CardClinic/arrow-down.svg';
import heart from '../../assets/icons/Heart.svg';
import heartActive from '../../assets/icons/HeartActive.svg';
import { setLikeSlice } from '../../redux/slices/favoritesSlice';

function CardClinic({ data }) {
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const dispatch = useDispatch();
  const handleLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {
      doctors: [],
      clinics: [],
    };
    const isLiked = favorites.clinics?.some((favorite) => favorite.id === data.id);
    setLike(isLiked);
  }, [data]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {
      doctors: [],
      clinics: [],
    };

    if (like) {
      const existingIndex = favorites.clinics?.findIndex((favorite) => favorite.id === data.id);
      if (existingIndex === -1) {
        favorites.clinics.push(data);
      }
    } else {
      const filteredFavorites = favorites.clinics?.filter((favorite) => favorite.id !== data.id);
      favorites.clinics = filteredFavorites;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    dispatch(setLikeSlice(like));
  }, [like, data]);

  const CardClinicSubtitle = () => {
    if (expanded) {
      return (
        <>
          {data.descriptions.slice(200)}{' '}
          <span onClick={handleClick}>
            Поменьше <img src={arrowUp} alt="arrow-up icon" />
          </span>
        </>
      );
    } else {
      return (
        <>
          <span onClick={handleClick}>
            Подробнее <img src={arrowDown} alt="arrow-down icon" />
          </span>
        </>
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.CardClinic_inner}>
          <img
            onClick={handleLike}
            className={styles.heart}
            src={like ? heartActive : heart}
            alt="heart"
          />
          <a href={data.link_clinic} target="_blank">
            <div className={styles.CardClinic_logo}>
              <img src={data.photo} alt="Unimed-Clinic" />
            </div>
          </a>{' '}
          <div className={styles.CardClinic_title}>
            <a href={data.link_clinic} target="_blank">
              <h3>{data.title}</h3>
              <p>Многопрофильный медицинский центр</p>
            </a>

            <div className={styles.CardClinic_subtitle}>
              {data.descriptions} {data.descriptions.length > 200 ? <CardClinicSubtitle /> : ''}
            </div>
          </div>
          <div className={styles.CardClinic_information}>
            <div className={styles.CardClinic_information_cards}>
              <img src={location} alt="Location icon" />
              <span>{data.address}</span>
            </div>

            <div className={styles.CardClinic_information_cards}>
              <img src={discovery} alt="Discovery icon" />
              <a href={data.link_2gis} target="blank">
                мы в 2ГИС
              </a>
            </div>

            <div className={styles.CardClinic_information_cards}>
              <img src={time} alt="Time-Circle icon" />
              <ul className={styles.information_cards_ul}>
                <li>
                  {data.weekday} {data.starting_working_day} - {data.ending_working_day}
                </li>
                <li>
                  {data.weekend} {data.starting_working_day} - {data.ending_working_day}
                </li>
              </ul>
            </div>

            <div
              className={`${styles.CardClinic_information_cards} ${styles.CardClinic_information_cardsTwo}`}>
              <img src={call} alt="Calling icon" />
              <ul className={styles.information_cards_ul}>
                <li className={styles.information_cards_li_strong}>{data.contacts1}</li>
                <li className={styles.information_cards_li_strong}>{data.contacts2}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardClinic;
