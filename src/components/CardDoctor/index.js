import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heart from '../../assets/icons/Heart.svg';
import heartActive from '../../assets/icons/HeartActive.svg';
import location from '../../assets/icons/Location.svg';
import pulse from '../../assets/icons/Pulse.svg';
import wallet from '../../assets/icons/Wallet.svg';
import inst from '../../assets/icons/Inst.svg';
import star0 from '../../assets/icons/Star0.svg';
import star from '../../assets/icons/stars.svg';
// import star from "../../assets/icons/Star.svg"

import Card from '../../assets/images/img.png';
import './module.css';

function CardDoctor({ data }) {
  const [like, setLike] = useState(false);
  const [stars, setStar] = useState([]);

  const handleLike = () => {
    setLike(!like);
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
    setStar(StarArray(data.rating));
  }, []);

  return (
    <Link style={{ outline: 'none', textDecoration: 'none' }}>
      <div style={{ marginBottom: '48px' }} className={'container'}>
        <img onClick={handleLike} className={'heart'} src={like ? heartActive : heart} />
        <img className={'cardAvatar'} src={Card} />
        <div className="info">
          <div className="up-side">
            <div className="left">
              <div className="full-name">
                <h1>{data.name}</h1>
              </div>
              <div className="speciality">{data.spec}</div>
              <div className="education">
                <p>
                  <img src={location} />
                  Юрфа
                </p>
              </div>
              <div className="mini-info">
                <div className="stage">
                  <p>
                    <img src={pulse} />
                    стаж {data.stage} лет
                  </p>
                </div>
                <div className="price">
                  <p>
                    <img src={wallet} />
                    прием {data.price} сомов
                  </p>
                </div>
                <div className="instagram">
                  <p>
                    <img src={inst} />
                    @dsadamk
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
                      e === 'point' ? <img src={star0} key={id} /> : <img src={star0} key={id} />,
                    )}
                </div>
                <div className="rate">{data.rating}</div>
                <div className="feedback">
                  <p>5 отзывов</p>
                </div>
              </div>
              <div className="amount">
                Кол-во посетивших пациентов
                <h2>-200-</h2>
              </div>
            </div>
          </div>
          <div className="description">
            <p>
              Лечени и консультация по вопросам: порок сердца, сердечная недостаточность, аритмия,
              атеросклероз, болезни периферических артерий и т.д. Проведение УЗИ диагностики входит
              в стоимость приема.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardDoctor;
