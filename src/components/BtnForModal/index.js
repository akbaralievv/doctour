import React from 'react';
import style from './BtnForModal.module.sass'

function BtnForModal()  {
    return (
        <div className={style.btnForModal}>
            <div className={style.container}>
                <div className={style.inner}>
                    <div className={style.leftBlock}>
                        <div className={style.spanOne}>
                            <span>Врач принимает по адресу:</span>
                            <span>Ул. Медерова, 135 лечебно-диагностический центр ЮРФА </span>
                        </div>
                        <div className={style.spanTwo}>
                            <span>График работы: </span>
                            <span>08:00 - 12:00 по пн, ср, пт</span>
                            <span>12:00 - 17:00 по пн, ср, пт</span>
                        </div>
                    </div>
                    <div className={style.btnBlock}>
                        <button className={style.btn}>Записаться на прием</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BtnForModal;