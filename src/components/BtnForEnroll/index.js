import React, { useEffect, useState } from 'react';
import style from './BtnForEnroll.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserProfile } from '../../redux/slices/GetUserProfileSlice';
import ModalLogin from '../ModalLogin';

function BtnForEnroll({ data }) {
  const startWD = data?.clinic?.[0]?.starting_working_day;
  const startWDshort = startWD?.substr(0, 5);
  const endWD = data?.clinic?.[0]?.ending_working_day;
  const endWDshort = endWD?.substr(0, 5);
  const { data: user, error } = useSelector((state) => state.GetUserProfileSlice);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  const handleClick = () => {
    document.body.style.overflow = error ? 'hidden' : '';
    setOpenModal(error);
  };

  const address = data.clinic?.map((clinic) => {
    if (clinic.address && clinic.title) {
      return `${clinic.address}, ${clinic.title}`;
    } else {
      return `${clinic.address}${clinic.title}`;
    }
  });

  return (
    <div className={style.btnForModal}>
      {openModal && <ModalLogin setOpenModal={setOpenModal} />}
      <div className={style.container}>
        <div className={style.inner}>
          <div className={style.leftBlock}>
            <div className={style.spanOne}>
              <span>Врач принимает по адресу:</span>
              <span>{address}</span>
            </div>
            <div className={style.spanTwo}>
              <div className={style.firstSpan}>
                <span>График работы: </span>
              </div>
              <div className={style.spans}>
                <span>
                  <span style={{ color: '#1B6B93' }}>
                    {startWDshort} - {endWDshort}
                  </span>{' '}
                  {data?.clinic?.[0]?.weekday}
                </span>
                {/* <span>
                  <span style={{ color: '#1B6B93' }}>12:00 - 17:00</span>
                  {data?.clinic?.[0]?.weekend}
                </span> */}
              </div>
            </div>
          </div>
          <NavLink
            to={user ? `/doctors/${data.id}/whatsapp` : `/doctors/${data.id}`}
            onClick={handleClick}
            state={data.full_name + '/' + data.id + '/' + data.phone}
            className={style.btn}>
            Записаться через Whatsapp
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BtnForEnroll;
