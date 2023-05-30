import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { closePopUp } from '../../redux/slices/UISlice';

function Layout() {
  const dispatch = useDispatch();
  const { langPopUp } = useSelector((state) => state.UIReducer);
  const { cityModal } = useSelector((state) => state.UIReducer);
  const handleClose = () => {
    dispatch(closePopUp(false));
  };
  return (
    <>
      <div
        onClick={handleClose}
        style={
          langPopUp || cityModal
            ? { width: '100%', height: '100%', position: 'absolute', zIndex: 0 }
            : { display: 'none' }
        }
        className={'CloseWindow'}
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
