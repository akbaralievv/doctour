import React, { useEffect } from 'react';
import AboutDoctor from '../../components/AboutDoctor';
import BtnForEnroll from '../../components/BtnForEnroll';
import InfoAboutDoc from '../../components/InfoAboutDoc';
import BtnForModal from '../../components/BtnForModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectDoctor } from '../../redux/slices/DoctorsSlice';
import { useParams } from 'react-router';
import { getProfile } from '../../redux/slices/GetProfileSlice';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from './ProfilePage.module.css';
import Preloader from '../../components/Preloader';
import NotFound from '../../components/NotFound';

function ProfilePage() {
  const { data, loading, error } = useSelector((state) => state.GetProfileSlice);
  const dataComment = useSelector((state) => state.PostCommentSlice);
  const { nameSpecialty } = useSelector((state) => state.GetDoctorsSlice);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dataComment.data]);

  return (
    <div className={styles.container}>
      <Breadcrumbs specialty={nameSpecialty} nameDoctors={data.full_name} />
      {loading ? (
        <Preloader />
      ) : data.length === 0 ? (
        <NotFound style={{ height: 'calc(100vh - 160px)' }} />
      ) : (
        ((<AboutDoctor data={data} />),
        (<BtnForEnroll data={data} />),
        (<InfoAboutDoc data={data} />),
        (<BtnForModal data={data} />))
      )}
    </div>
  );
}

export default ProfilePage;
