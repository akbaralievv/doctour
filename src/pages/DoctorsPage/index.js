import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardDoctor from '../../components/CardDoctor';
import './DoctorModule.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import SearchForm from '../../components/SearchForm';
import { getDoctors } from '../../redux/slices/GetDoctorsSlice';
import SkeletonCardDoctor from '../../components/SkeletonCardDoctor';
import NotFound from '../../components/NotFound';
import ModalLogin from '../../components/ModalLogin';

function DoctorsPage() {
  const { city } = useSelector((state) => state.UIReducer);
  const { data, loading, error } = useSelector((state) => state.GetDoctorsSlice);
  const { idSpecialty, nameSpecialty } = useSelector((state) => state.GetDoctorsSlice);
  const { searchValue } = useSelector((state) => state.GetGlobalSearch);

  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors({ city, idSpecialty, searchValue, currentPage }));
    window.scrollTo(0, 0);
  }, [dispatch, city, idSpecialty, searchValue, currentPage]);

  useEffect(() => {
    setOpenModal(error);
    document.body.style.overflow = error ? 'hidden' : '';
  }, [data, loading, error]);

  const howManyPages = Math.ceil(data?.count / 10);

  const cityName =
    city === '92b89611-4119-4936-8a60-61d25348ad26'
      ? 'Бишкек'
      : city === 'ca346822-2a3d-466f-84e7-a9ada2626ab8'
      ? 'Ош'
      : '';

  const skeletons = [...new Array(7)].map((_, index) => <SkeletonCardDoctor key={index} />);

  const doctors = loading ? (
    skeletons
  ) : error || data.results?.length === 0 ? (
    <NotFound style={{ height: 'calc(100vh - 430px)' }} />
  ) : (
    data.results?.map((data) => <CardDoctor data={data} key={data.id} />)
  );

  return (
    <div className={'cont'}>
      {openModal && <ModalLogin setOpenModal={setOpenModal} />}
      <div className="wrapper">
        <div className="crumbLinks">
          <Breadcrumbs specialty={nameSpecialty} />
        </div>
        <div className="infoDoctors">
          <h1>
            Все {nameSpecialty || 'врачи'} города {cityName}
          </h1>
        </div>
        <SearchForm placeholder={'Врачи'} />
        <div className={'wrapper-card'}>{doctors}</div>
        <div className="pagination-block">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
