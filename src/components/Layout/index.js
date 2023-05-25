import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import {useDispatch} from "react-redux";
import {closePopUp} from "../../redux/slices/UISlice";

function Layout() {
    const dispatch = useDispatch()
    const handleClose=()=>{
        dispatch(closePopUp(false))
    }


  return (
    <>
      <div onClick={handleClose} style={{width:'100%',height:'100%',position:'absolute',zIndex:0, }} className={'CloseWindow'}/>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
