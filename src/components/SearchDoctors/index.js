import React, {useState} from 'react';
import styles from './SearchDoctors.module.css'
import img from '../../assets/images/mainPageImg.png'
import {ReactComponent as Arrow} from '../../assets/icons/StrokeDown.svg'


function SearchDoctors() {
    const [state, setState] = useState('Выберите категорию')
    const [state2, setState2] = useState('Бишкек')

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const handleClick = () => setOpen(!open)
    const handleClick2 = () => setOpen2(!open2)

    const arr = ['Аллерголог', 'Андролог', 'Венеролог', 'Гастроэнтеролог', 'Гинеколог', 'Дерматолог', 'Иммунолог', 'Диетолог', 'Кардиолог', 'Косметолог', 'ЛОР']
    const arr2 = ['Кара-Балта', 'Токмок', 'Кант', 'Балыкчи', 'Чолпон-Ата', 'Каракол', 'Ош', 'Нарын', 'Талас', 'Баткен', 'Джалал-Абад']

    const changeValue = async (event) => {
        await setState(event.target.innerText)
        await setOpen(false)
    }

    const changeValue2 = async (event) => {
        await setState2(event.target.innerText)
        await setOpen2(false)
    }


    return (
        <div className={styles.searchDoctor}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <h1>Сервис по поиску лучших врачей по Кыргызстану</h1>
                    </div>
                    <div className={styles.right}>
                        <img src={img} alt="img"/>
                    </div>
                </div>
                <div  className={styles.footer}>
                    <div className={styles.select}>
                        <div onClick={handleClick} className={styles.input} onBlur={() => setOpen(false)}  style={{
                            borderRadius: open ? '8px 8px 0 0' : '8px 8px 8px 8px',
                            color: open ? '#1B6B93' : '#023246',
                            borderBottom: open ? 'none' : '1px solid #023246',
                        }}>
                            <span onChange={changeValue}>{state}</span>
                            <button className={styles.accord__btn}>
                                <Arrow style={{
                                    transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
                                    cursor: 'pointer'
                                }}/>
                            </button>
                        </div>
                        <div className={styles.dropDown} style={{
                            height: open ? '300px' : '0px',
                            border: open ? '1px solid #023246' : 'none',
                            background: 'white',
                            zIndex: 100,
                            paddingBottom: open ? '5px' : '0',
                            borderRadius: open ? "0 0 8px 8px" : '0',
                            transition: '.4s !important'
                        }}>
                            <ul className={styles.list}>
                                {arr.map((i, k) => <li className={styles.itemm} key={k} onClick={changeValue}>{i}</li>)}
                            </ul>
                        </div>
                    </div>
                    {/* SELECT-RIGHT ==> */}
                    <div className={styles.select}>
                        <div onClick={handleClick2} className={styles.input} onBlur={() => setOpen2(false)} style={{
                            borderRadius: open2 ? '8px 8px 0 0' : '8px 8px 8px 8px',
                            color: open2 ? '#1B6B93' : '#023246',
                            borderBottom: open2 ? 'none' : '1px solid #023246',
                            transition: '.4s'
                        }}>
                            <span onChange={changeValue2}>{state2}</span>
                            <button className={styles.accord__btn}>
                                <Arrow style={{
                                    transform: open2 ? 'rotate(-180deg)' : 'rotate(0deg)',
                                    cursor: 'pointer'
                                }}/>
                            </button>
                        </div>
                        <div className={styles.dropDown} style={{
                            height: open2 ? 'max-content' : '0px',
                            border: open2 ? '1px solid #023246' : 'none',
                            background: 'white',
                            zIndex: 100,
                            paddingBottom: open2 ? '5px' : '0',
                            borderRadius: open2 ? "0 0 8px 8px" : '0'
                        }}>
                            <ul className={styles.list}>
                                {arr2.map((i, k2) => <li className={styles.itemm} key={k2} onClick={changeValue2}>{i}</li>)}
                            </ul>
                        </div>
                    </div>
                    <button className={styles.btn}>Найти</button>
                </div>
            </div>
        </div>
    );
}

export default SearchDoctors;