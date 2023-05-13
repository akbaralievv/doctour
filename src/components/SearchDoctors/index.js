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

  const arrays = [
    {
      a: 'Аллерголог',
      b: 'Андролог',
      c: 'Венеролог',
      d: 'Гастроэнтеролог',
      e: 'Гинеколог',
      f: 'Дерматолог',
      g: 'Иммунолог',
      h: 'Диетолог',
      i: 'Кардиолог',
      j: 'Косметолог',
      k: 'ЛОР',

      aa: 'Кара-Балта',
      bb: 'Токмок',
      cc: 'Кант',
      dd: 'Балыкчи',
      ee: 'Чолпон-Ата',
      ff: 'Каракол',
      gg: 'Ош',
      hh: 'Нарын',
      ii: 'Талас',
      jj: 'Баткен',
      kk: 'Джалал-Абад'
    }
  ]

  function changeValue(event) {
    const selectedText = event.target.textContent;
    setState(selectedText)
  }

  function changeValue2(event) {
    const selectedText2 = event.target.textContent;
    setState2(selectedText2)
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
      <div className={styles.footer}>
        <div className={styles.select}>
          <div className={styles.input} style={{
            borderRadius: open ? '8px 8px 0 0' : '8px 8px 8px 8px',
            color: open ? '#1B6B93' : '#023246',
            borderBottom: open ? 'none' : '1px solid #023246',
          }}>
            <span onChange={changeValue}>{state}</span>
            <button className={styles.accord__btn} onClick={handleClick}>
              <Arrow style={{
                transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
                cursor: 'pointer'
              }}/>
            </button>
          </div>
          {
            arrays.map((value, k) => (
            <div className={styles.dropDown} key={k} style={{
              height: open ? '379px' : '0px',
              border: open ? '1px solid #023246' : 'none',
              background: 'white',
              zIndex: 100,
              transition: '.3s'
            }}>
              <ul className={styles.list}>
                <li className={styles.itemm} onClick={changeValue}>{value.a}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.b}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.c}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.d}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.e}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.f}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.g}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.h}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.i}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.j}</li>
                <li className={styles.itemm} onClick={changeValue}>{value.k}</li>
              </ul>
            </div>
            ))
          }
        </div>
        {/* SELECT-RIGHT ==> */}
        <div className={styles.select}>
          <div className={styles.input} style={{
            borderRadius: open2 ? '8px 8px 0 0' : '8px 8px 8px 8px',
            color: open2 ? '#1B6B93' : '#023246',
            borderBottom: open2 ? 'none' : '1px solid #023246',
          }}>
            <span onChange={changeValue2}>{state2}</span>
            <button className={styles.accord__btn} onClick={handleClick2}>
              <Arrow style={{
                transform: open2 ? 'rotate(-180deg)' : 'rotate(0deg)',
                cursor: 'pointer'
              }}/>
            </button>
          </div>
          {
            arrays.map((value, k) => (
                <div className={styles.dropDown} key={k} style={{
                  height: open2 ? '379px' : '0px',
                  border: open2 ? '1px solid #023246' : 'none',
                  background: 'white',
                  zIndex: 100,
                  transition: '.3s'
                }}>
                  <ul className={styles.list}>
                    <li className={styles.itemm} onClick={changeValue2}>{value.aa}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.bb}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.cc}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.dd}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.ee}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.ff}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.gg}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.hh}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.ii}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.jj}</li>
                    <li className={styles.itemm} onClick={changeValue2}>{value.kk}</li>
                  </ul>
                </div>
            ))
          }
        </div>
        <button className={styles.btn}>Найти</button>
      </div>
    </div>
  </div>
  );
}

export default SearchDoctors;