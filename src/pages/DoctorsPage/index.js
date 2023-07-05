import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardDoctor from '../../components/CardDoctor';
import './DoctorModule.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import SearchForm from '../../components/SearchForm';
import { getDoctors } from '../../redux/slices/GetDoctorsSlice';
import SkeletonCardDoctor from '../../components/SkeletonCardDoctor';
import { current } from '@reduxjs/toolkit';
import styled from '@emotion/styled';
import NotFound from '../../components/NotFound';

function DoctorsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [notFound, setNotFound] = useState(false);

  const { city } = useSelector((state) => state.UIReducer);
  const { data, loading, error } = useSelector((state) => state.GetDoctorsSlice);
  const { idSpecialty, nameSpecialty } = useSelector((state) => state.GetDoctorsSlice);
  const { searchValue } = useSelector((state) => state.GetGlobalSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors({ city, idSpecialty, searchValue, currentPage }));
  }, [city, idSpecialty, searchValue]);

  useEffect(() => {
    !loading && data?.length === 0 ? setNotFound(true) : setNotFound(false);
  }, [data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(data?.length / postsPerPage);

  const skeletons = [...new Array(7)].map((_, index) => <SkeletonCardDoctor key={index} />);

  return (
    <div className={'cont'}>
      <div className="wrapper">
        <div className="crumbLinks">
          <Breadcrumbs specialty={nameSpecialty} />
        </div>
        <div className="infoDoctors">
          <h1>
            Все {nameSpecialty || 'врачи'} города{' '}
            {city === '92b89611-4119-4936-8a60-61d25348ad26'
              ? 'Бишкек'
              : city === 'ca346822-2a3d-466f-84e7-a9ada2626ab8'
              ? 'Ош'
              : ''}
          </h1>
        </div>
        <SearchForm placeholder={'Врачи'} />
        <div className={'wrapper-card'}>
          {loading ? (
            skeletons
          ) : notFound ? (
            <NotFound style={{ height: 'calc(100vh - 430px)' }} />
          ) : (
            currentPosts?.map((data) => <CardDoctor data={data} key={data.id} />)
          )}
        </div>
        <div className="pagination-block">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
