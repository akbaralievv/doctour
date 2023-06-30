import React from 'react';
import style from './BtnForModal.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { handleFeedBack } from '../../redux/slices/DoctorsSlice';
import CommentItem from '../CommentItem';

function BtnForModal({ data }) {
  const dispatch = useDispatch();

  const handleShow = () => {
    document.body.style.overflow = 'hidden';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    dispatch(handleFeedBack(true));
  };

  return (
    <div>
      <div className={style.btnForModal}>
        <div className={style.container}>
          <div className={style.inner}>
            <div className={style.left}>
              <div className={style.spans}>
                <p onClick={handleShow}>Написать Отзыв</p>
              </div>
            </div>
            <div className={style.right}>
              <div>{data?.num_reviews} отзывов</div>
            </div>
          </div>

          <div className={style.comments}>
            {data.doctor_reviews?.map((e) => (
              <CommentItem key={e.id} e={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BtnForModal;
