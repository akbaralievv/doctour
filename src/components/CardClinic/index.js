import { useState } from "react";
import styles from './CardClinic.module.css';

function CardClinic() {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const CardClinicSubtitle = () => {
        if (expanded) {
            return (
                <>
                    Врачи высшей категории окажут Вам высококвалифицированную помощь по всем основным направлениям{' '}
                    <span onClick={handleClick}>
                        Поменьше <img src="/src/assets/icons/CardClinic/arrow-up.svg" alt="arrow-up icon" />
                    </span>
                </>
            );
        } else {
            return (
                <>
                    <span onClick={handleClick}>
                        Подробнее <img src="/src/assets/icons/CardClinic/arrow-down.svg" alt="arrow-down icon" />
                    </span>
                </>
            );
        }
    };

    return (
        <div className="CardClinic">
            <div className={styles.container}>
                <div className={styles.CardClinic_inner}>
                    <div className={styles.CardClinic_logo}>
                        <img src="src/assets/Images/CardClinic/Unimed-Clinic.png" alt="Unimed-Clinic" />
                    </div>

                    <div className={styles.CardClinic_title}>
                        <h3>Unimed Clinic</h3>
                        <p>Многопрофильный медицинский центр</p>

                        <div className={styles.CardClinic_subtitle}>
                            В клинике МЦ «UNIMED Clinic», Вы имеете возможность получить весь спектр
                            медицинских услуг — от первичного посещения и
                            получения консультации врача-специалиста, до эффективного, индивидуально подобранного лечения{" "}
                            <CardClinicSubtitle />
                        </div>
                    </div>

                    <div className={styles.CardClinic_information}>
                        <div className={styles.CardClinic_information_cards}>
                            <img src="/src/assets/icons/CardClinic/Location.svg" alt="Location icon" />
                            <span>г.Бишкек, ул. Байтик Баатыра 3в</span>
                        </div>

                        <div className={styles.CardClinic_information_cards}>
                            <img src="/src/assets/icons/CardClinic/Discovery.svg" alt="Discovery icon" />
                            <a href="https://2gis.kg/bishkek/inside/15763234351045008/firm/70000001029245818?m=74.608751%2C42.835966%2F19.15%2Fr%2F-3.33" target="blank">
                                мы в 2ГИС
                            </a>
                        </div>

                        <div className={styles.CardClinic_information_cards}>
                            <img src="/src/assets/icons/CardClinic/Time-Circle.svg" alt="Time-Circle icon" />
                            <ul className={styles.information_cards_ul}>
                                <li>ПН - ПТ  8.00 - 18.00</li>
                                <li>СБ - ВС   9.00 - 16.00</li>
                            </ul>
                        </div>

                        <div className={`${styles.CardClinic_information_cards} ${styles.CardClinic_information_cardsTwo}`}>
                            <img src="/src/assets/icons/CardClinic/Calling.svg" alt="Calling icon" />
                            <ul className={styles.information_cards_ul}>
                                <li className={styles.information_cards_li_strong}>+996 312 000 111</li>
                                <li className={styles.information_cards_li_strong}>+996 555 000 111</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardClinic;
