import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile(id));
    window.scrollTo(0, 0);
  }, [dataComment.data]);

  const profile = loading ? (
    <Preloader />
  ) : error ? (
    <NotFound style={{ height: 'calc(100vh - 160px)' }} />
  ) : (
    <>
      <AboutDoctor data={data} />
      <BtnForEnroll data={data} />
      <InfoAboutDoc data={data} />
      <BtnForModal data={data} />
    </>
  );

  return (
    <div className={styles.container}>
      <Breadcrumbs specialty={nameSpecialty} nameDoctors={data.full_name} />
      {profile}
    </div>
  );
}

export default ProfilePage;
