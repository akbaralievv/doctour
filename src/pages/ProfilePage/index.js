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

function ProfilePage() {
  const { data } = useSelector((state) => state.GetProfileSlice);
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
      <AboutDoctor data={data} />
      <BtnForEnroll data={data} />
      <InfoAboutDoc data={data} />
      <BtnForModal data={data} />
    </div>
  );
}

export default ProfilePage;
