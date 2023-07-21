import React from 'react';
import style from './TopDocrtors.module.sass';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import iconA from '../../assets/icons/TopDoctors/Terapevt.png';
import iconB from '../../assets/icons/TopDoctors/Dantist.png';
import iconC from '../../assets/icons/TopDoctors/Dermatolog.png';
import iconD from '../../assets/icons/TopDoctors/Okulist.png';
import iconE from '../../assets/icons/TopDoctors/Akusher.png';
import iconF from '../../assets/icons/TopDoctors/Psyhology.png';
import iconG from '../../assets/icons/TopDoctors/Cardiolog.png';
import iconH from '../../assets/icons/TopDoctors/Pediatr.png';
import { setIdSpecialty, setNameSpecialty } from '../../redux/slices/GetDoctorsSlice';
import { setSearch } from '../../redux/slices/GetGlobalSearch';

function TopDoctors() {
  const dispatch = useDispatch();
  const handleClick = (id, name) => {
    dispatch(setIdSpecialty(id));
    dispatch(setNameSpecialty(name));
    dispatch(setSearch(''));
  };
  const texts = [
    { id: '4', title: 'Терапевт', img: iconA },
    { id: '12', title: 'Кардиолог', img: iconG },
    { id: '14', title: 'Педиатр', img: iconH },
    { id: '3', title: 'Стоматолог', img: iconB },
    { id: '25', title: 'Дерматолог', img: iconC },
    { id: '26', title: 'Офтальмолог', img: iconD },
    { id: '27', title: 'Акушер', img: iconE },
    { id: '6', title: 'Невролог', img: iconF },
  ];

  return (
    <div className={style.topDoctors}>
      <div className={style.container}>
        <div className={style.inner}>
          <h2>Популярные специалисты</h2>
          <div className={style.topIcons}>
            <div className={style.icons}>
              {texts?.map((i, k) => (
                <Link
                  to="/doctors"
                  key={k}
                  className={style.block}
                  onClick={() => {
                    handleClick(i.id, i.title);
                  }}>
                  <div>
                    <img className={style.img} key={k.id} src={i.img} alt="" />
                  </div>
                  <span>{i.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDoctors;
