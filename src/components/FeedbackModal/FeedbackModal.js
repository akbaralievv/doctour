import React, { useState } from 'react';
import style from './FeedbackModal.module.sass';

import stars from '../../assets/icons/StarF0.svg';
import stars1 from '../../assets/icons/StarF1.svg';
import x from '../../assets/icons/Close Square.svg';
import { useDispatch, useSelector } from 'react-redux';
import { handleFeedBack } from '../../redux/slices/DoctorsSlice';
import axios from 'axios';

function FeedbackModal() {
  const { data } = useSelector((state) => state.GetProfileSlice);
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const handleNone = () => {
    document.body.style.cssText = ``;
    dispatch(handleFeedBack(false));
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSend = async () => {
    try {
      const res = await axios.post('https://bekbolsun.pythonanywhere.com/api/v1/src/reviews/', {
        id: data.id,
        text: text,
        stars: rating,
        doctor: data.id,
      });
      await handleNone();
      await window.location.reload();
    } catch (e) {}
  };
  const handle12 = () => {};

  return (
    <React.Fragment>
      <div className={style.modalWrapper}>
        <div onClick={handleNone} className={style.boxShadow}></div>
        <div className={style.contentFeed}>
          <div className={style.modalContent}>
            <img style={{ zIndex: 5 }} className={style.btnClose} src={x} onClick={handleNone} />
            <div className={style.innerModal}>
              <h2 style={{}}>Оценить врача</h2>
              <div className={style.feedInfo}>
                <div className={style.head}>
                  <div className={style.iconStar}>
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        isSelected={index < rating}
                        onClick={() => handleStarClick(index + 1)}
                      />
                    ))}
                  </div>
                </div>
                <form action="" className={style.form}>
                  <div className={style.comment}>
                    <h2>Написать комментарий</h2>
                    <textarea onChange={handleText} name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </form>
                <button
                  type="submit"
                  onClick={text && rating > 0 ? handleSend : handle12}
                  style={text && rating > 0 ? {} : { background: '#DEECF2' }}
                  className={style.btnSend}>
                  Оставить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeedbackModal;

function Star({ isSelected, onClick }) {
  return (
    <span style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={isSelected ? stars : stars1} />
    </span>
  );
}
