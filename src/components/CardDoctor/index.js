import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heart from '../../assets/icons/Heart.svg';
import heartActive from '../../assets/icons/HeartActive.svg';
import location from '../../assets/icons/Location.svg';
import pulse from '../../assets/icons/Pulse.svg';
import wallet from '../../assets/icons/Wallet.svg';
import inst from '../../assets/icons/Inst.svg';
import star0 from '../../assets/icons/Star0.svg';
import star from '../../assets/icons/Star.svg';

import Card from '../../assets/images/img.png';
import './module.css';
import { useDispatch } from 'react-redux';
import { setLikeSlice } from '../../redux/slices/favoritesSlice';

function CardDoctor({ data }) {
  const [like, setLike] = useState(false);
  const [stars, setStar] = useState([]);
  const dispatch = useDispatch();
  const handleLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || { doctors: [], clinics: [] };
    const isLiked = favorites.doctors?.some((favorite) => favorite.id === data.id);
    setLike(isLiked);
  }, [data]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || { doctors: [], clinics: [] };

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

  return (
    <Link style={{ outline: 'none', textDecoration: 'none' }}>
      <div style={{ marginBottom: '48px' }} className={'container'}>
        <img
          onClick={handleLike}
          className={'heart'}
          src={like ? heartActive : heart}
          alt="heart"
        />
        <img className={'cardAvatar'} src={data.photo} alt="doctor" />
        <div className="info">
          <div className="up-side">
            <div className="left">
              <div className="full-name">
                <h1>{data.full_name}</h1>
              </div>
              <div className="speciality">
                {data.specialties.map((spec, index) => (
                  <React.Fragment key={spec.id}>
                    {spec.name}
                    {index !== data.specialties.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </div>
              <div className="education">
                <p>
                  <img src={location} />
                  {data.clinic.map((clinic) => `${clinic.address}, ${clinic.title}`)}
                </p>
              </div>
              <div className="mini-info">
                <div className="stage">
                  <p>
                    <img src={pulse} />
                    Стаж {data.experience} лет
                  </p>
                </div>
                <div className="price">
                  <p>
                    <img src={wallet} />
                    Прием {data.price} сомов
                  </p>
                </div>
                <div className="instagram">
                  <p>
                    <img src={inst} />
                    {data.social}
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="rating">
                <div className="stars">
                  {stars
                    .slice(0, 5)
                    .map((e, id) =>
                      e === 'point' ? <img src={star} key={id} /> : <img src={star0} key={id} />,
                    )}
                </div>
                <div className="rate">{data.average_rating?.toFixed(2)}</div>
                <div className="feedback">
                  <p>{data.num_reviews} отзывов</p>
                </div>
              </div>
              <div className="amount">
                Кол-во посетивших пациентов
                <h2>-200-</h2>
              </div>
            </div>
          </div>
          <div className="description">
            <p>{data.summary}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardDoctor;
