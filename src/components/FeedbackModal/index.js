import React from 'react';
import style from './FeedbackModal.module.sass'

import stars from '../../assets/icons/stars.svg'
import avatar from '../../assets/images/doctor_w.svg'

const FeedbackModal = ( {handleShow} ) => {

    return (
        <React.Fragment>
            <div className={style.modalWrapper} onClick={handleShow}></div>
            <div className={style.modalContent}>

                <button className={style.btnClose} onClick={handleShow}>×</button>
                <div className={style.innerModal}>
                    <div className={style.head}>
                        <h2>Оставить отзыв</h2>
                        <div className={style.avatar}>
                            <img src={avatar} alt=""/>
                            <h3>Акылбекова Асель Мирлановна</h3>
                        </div>
                        <div className={style.iconStar}>
                            <h3>Общая оценка:</h3>
                            <img src={stars} alt=""/>
                        </div>
                    </div>
                    <form action="" className={style.form}>
                        <div className={style.comment}>
                            <label>Напишите Ваши впечатления</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className={style.mail}>
                            <label>Почта</label>
                            <input type="text"/>
                            <span>*Требуется для проверки</span>
                        </div>
                    </form>
                    <button type="submit" className={style.btnSend}>Отправить</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FeedbackModal;