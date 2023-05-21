import React from 'react';
import style from '../../components/ListDoctors/ListDoctors.module.sass'

function ListDoctors() {

  const numText = [
    {num: 1, text: 'Аллерголог'},
    {num: 2, text: 'Аллерголог'},
    {num: 3, text: 'Аллерголог'},
    {num: 4, text: 'Аллерголог'},
    {num: 5, text: 'Аллерголог'},
    {num: 6, text: 'Аллерголог'},
    {num: 7, text: 'Аллерголог'},
    {num: 8, text: 'Аллерголог'},
    {num: 9, text: 'Аллерголог'},
    {num: 10, text: 'Аллерголог'},
    {num: 11, text: 'Аллерголог'},
    {num: 12, text: 'Аллерголог'}
  ]

  return (
  <div className={style.listDoctors}>
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.left} style={{height: '580px'}}>
          <span className={style.span}>Врачи Бишкека</span>
          <div className={style.innerRL}>
            <ul className={style.colon}>
              {numText.map((i1, k) => <li className={style.innerLi} key={k}><p className={style.input}>{i1.num}</p>
                <p>{i1.text}</p></li>)}
            </ul>
            <ul className={style.colon}>
              {numText.map((i1, k) => <li className={style.innerLi} key={k}><p className={style.input}>{i1.num}</p>
                <p>{i1.text}</p></li>)}
            </ul>
          </div>
        </div>
        <hr style={{marginTop: '80px', marginBottom: '-50px'}}/>
        <div className={style.left}>
          <span className={style.span}>Врачи Оша</span>
          <div className={style.innerRL}>
            <ul className={style.colon}>
              {numText.map((i1, k) => <li className={style.innerLi} key={k}><p className={style.input}>{i1.num}</p>
                <p>{i1.text}</p></li>)}
            </ul>
            <ul className={style.colon}>
              {numText.map((i1, k) => <li className={style.innerLi} key={k}><p className={style.input}>{i1.num}</p>
                <p>{i1.text}</p></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListDoctors;

