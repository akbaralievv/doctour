import React, { useEffect, useState } from 'react';
import style from './CommentItem.module.sass';
import img from '../../assets/images/img.png';
import star from '../../assets/icons/Star.svg';
import star0 from '../../assets/icons/Star0.svg';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CommentItem = ({ e }) => {
  const [stars, setStar] = useState([]);
  const StarArray3 = (numb3) => {
    const stars = [];
    let count = 0;
    while (count < 5) {
      count = count + 1;
      if (count <= numb3) {
        stars.push('point');
      }
      if (count > numb3) {
        stars.push('zero');
      }
    }
    return stars;
  };

  useEffect(() => {
    const handleReq = async () => {
      setStar(StarArray3(e.stars));
    };
    handleReq();
  }, []);

  return (
    <div className={style.commentItem}>
      <div className={style.comment}>
        <div className={style.leftCom}>
          <div className={style.infoCom}>
            <h2>Пациент</h2>
            <p>20 июня 2023 в 13:22</p>
            <div className={style.rate}>
              <h2 style={{ color: '#023246' }}>
                <span style={{ marginRight: '16px' }}>{e.stars}</span>{' '}
                {stars
                  .slice(0, 5)
                  .map((e, id) =>
                    e === 'point' ? <img src={star} key={id} /> : <img src={star0} key={id} />,
                  )}
              </h2>
              <span></span>
            </div>
          </div>
        </div>
        <div className={style.rightCom}>
          <div className={style.textCom}>{e.text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
