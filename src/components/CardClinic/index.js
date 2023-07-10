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
    localUpdate(!like);
    setLike(!like);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || { doctors: [], clinics: [] };
    const isLiked = favorites.clinics?.find((favorite) => favorite.id === data.id);
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
      const existingIndex = favorites.clinics?.findIndex((favorite) => favorite.id === data.id);
      if (existingIndex === -1) {
        updatedFavorites = {
          ...favorites,
          clinics: [...favorites.clinics, data],
        };
      }
    } else {
      const filteredFavorites = favorites.clinics?.filter((favorite) => favorite.id !== data.id);
      updatedFavorites = {
        ...favorites,
        clinics: filteredFavorites,
      };
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const CardClinicSubtitle = () => {
    if (expanded) {
      return (
        <div style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
          <p>{data.descriptions}</p>
          <a onClick={handleClick}>
            Поменьше <img src={arrowUp} alt="arrow-up icon" />
          </a>
        </div>
      );
    } else {
      return (
        <div style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
          <p>{data.descriptions.slice(0, 100)}</p>
          {data.descriptions.length > 100 && (
            <a onClick={handleClick}>
              Подробнее <img src={arrowDown} alt="arrow-down icon" />
            </a>
          )}
        </div>
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.CardClinic_inner}>
          <div className={styles.heartWrapper}>
            <img
              onClick={handleLike}
              className={styles.heart}
              src={like ? heartActive : heart}
              alt="heart"
            />
          </div>
          <a href={data.link_clinic} target="_blank">
            <div className={styles.CardClinic_logo}>
              <img src={data.photo} alt="Unimed-Clinic" />
            </div>
          </a>
          <div className={styles.CardClinic_title}>
            <a href={data.link_clinic} target="_blank">
              <h3>{data.title}</h3>
              <p>Многопрофильный медицинский центр</p>
            </a>

            <div className={styles.CardClinic_subtitle}>
              {data.descriptions?.length > 100 ? <CardClinicSubtitle /> : data.descriptions}
            </div>
          </div>
          <div className={styles.CardClinic_information}>
            {data.address && (
              <div className={styles.CardClinic_information_cards}>
                <img src={location} alt="Location icon" />
                <span>{data.address}</span>
              </div>
            )}

            {data.link_2gis && (
              <div className={styles.CardClinic_information_cards}>
                <img src={discovery} alt="Discovery icon" />
                <a href={data.link_2gis} target="blank">
                  мы в 2ГИС
                </a>
              </div>
            )}
            {(data.weekday || data.weekend) && (
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
            )}
            {(data.contacts1 || data.contacts2) && (
              <div
                className={`${styles.CardClinic_information_cards} ${styles.CardClinic_information_cardsTwo}`}>
                <img src={call} alt="Calling icon" />
                <ul className={styles.information_cards_ul}>
                  {data.contacts1 && (
                    <li className={styles.information_cards_li_strong}>
                      {(data.contacts1 + '').replace(
                        /(\d{3})(\d{3})(\d{3})(\d{3})/,
                        '+$1 $2 $3 $4',
                      )}
                    </li>
                  )}
                  {data.contacts2 && (
                    <li className={styles.information_cards_li_strong}>
                      {(data.contacts2 + '').replace(
                        /(\d{3})(\d{3})(\d{3})(\d{3})/,
                        '+$1 $2 $3 $4',
                      )}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardClinic;
