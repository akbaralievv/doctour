import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { closePopUp } from '../../redux/slices/UISlice';
import FeedBackModal from '../FeedBackModal/FeedbackModal';

function Layout() {
  const dispatch = useDispatch();
  const { cityModal } = useSelector((state) => state.UIReducer);
  const { feedback } = useSelector((state) => state.DoctorsReducer);
  const handleClose = () => {
    dispatch(closePopUp(false));
  };
  return (
    <>
      <div
        onClick={handleClose}
        style={
          cityModal
            ? { width: '100%', height: '100%', position: 'absolute', zIndex: 0 }
            : { display: 'none' }
        }
        className={'CloseWindow'}
      />
      {feedback === true ? (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          {<FeedBackModal />}
        </div>
      ) : (
        <div></div>
      )}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
