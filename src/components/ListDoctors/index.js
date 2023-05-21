import React from 'react';
import style from '../../components/ListDoctors/ListDoctors.module.sass'

function ListDoctors() {

  const arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  // const arrText = ['Аллерголог', 'Андролог', 'Венеролог', 'Гастроэнтеролог', 'Гинеколог', 'Дерматолог', 'Иммунолог', 'Диетолог', 'Кардиолог', 'Косметолог', 'ЛОР']

  return (
  <div className={style.listDoctors}>
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.left} style={{height: '580px'}}>
          <span style={{marginBottom: '48px', display: 'block', fontWeight: '700', fontSize: '32px', textAlign:'center'}}>Врачи Бишкека</span>
          <ul className={style.colon}>
            {arr3.map((i2, k) => <li className={style.innerLi} key={k}><input className={style.input} value={i2} style={{width: '60px',height: '24px'}}/>
              <p>Аллерголог</p></li>)}
          </ul>
        </div>
        <hr/>
        <div className={style.left} style={{height: '580px'}}>
          <span style={{marginBottom: '48px', display: 'block', fontWeight: '700', fontSize: '32px', textAlign:'center'}}>Врачи Оша</span>
          <ul className={style.colon}>
            {arr3.map((i2, k) => <li className={style.innerLi} key={k}><input className={style.input} value={i2} style={{width: '60px',height: '24px'}}/>
              <p>Аллерголог</p></li>)}
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListDoctors;

