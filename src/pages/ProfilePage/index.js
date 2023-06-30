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

function ProfilePage() {
  const { data } = useSelector((state) => state.GetProfileSlice);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(id));
  }, []);
  return (
    <div>
      <AboutDoctor data={data} />
      <BtnForEnroll data={data} />
      <InfoAboutDoc data={data} />
      <BtnForModal data={data} />
    </div>
  );
}

export default ProfilePage;
