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
    { id: 'c570329f-6ae0-4b5f-89f6-7a5db7a7d949', title: 'Терапевт', img: iconA },
    { id: 'e53f5530-ae88-4fff-b86b-cbd00d0bf472', title: 'Кардиолог', img: iconG },
    { id: 'aac54d55-c0cc-4669-b724-982bfec73f6e', title: 'Педиатр', img: iconH },
    { id: '476f7d19-5670-4aec-8c4e-628ed8f12f96', title: 'Стоматолог', img: iconB },
    { id: '34f62861-4f68-4888-baea-05c819828d18', title: 'Дерматолог', img: iconC },
    { id: 'eeb04ca4-b912-4a09-8bac-c9738015cd4e', title: 'Офтальмолог', img: iconD },
    { id: '05baf3e3-393d-44d3-b854-c01cfc42802a', title: 'Акушер', img: iconE },
    { id: 'e6498e88-7e47-4898-b196-86ffe3d9a44d', title: 'Невролог', img: iconF },
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
