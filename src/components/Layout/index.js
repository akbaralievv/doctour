import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';
import { closePopUp } from '../../redux/slices/UISlice';
import FeedbackModal from '../FeedbackModal/FeedbackModal';
import Preloader from '../Preloader';
import ModalLogin from '../ModalLogin';

function Layout() {
  const dispatch = useDispatch();
  const { cityModal } = useSelector((state) => state.UIReducer);
  const { feedback } = useSelector((state) => state.DoctorsReducer);
  const { error, data: comment } = useSelector((state) => state.PostCommentSlice);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    dispatch(closePopUp(false));
  };

  useEffect(() => {
    setOpenModal(error);
    document.body.style.overflow = error ? 'hidden' : '';
  }, [error]);

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
          {<FeedbackModal />}
        </div>
      ) : openModal ? (
        <ModalLogin setOpenModal={setOpenModal} />
      ) : (
        ''
      )}
      <Header />
      {<Outlet />}
      <Footer />
    </>
  );
}

export default Layout;
