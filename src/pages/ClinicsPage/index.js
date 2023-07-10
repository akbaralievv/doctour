import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardClinic from '../../components/CardClinic';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import './moduleClinic.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import SearchForm from '../../components/SearchForm';
import { getClinic } from '../../redux/slices/GetClinicSlice';
import SkeletonCardClinic from '../../components/SkeletonCardClinic';
import NotFound from '../../components/NotFound';

function ClinicsPage() {
  const { data, loading, error } = useSelector((state) => state.GetClinicSlice);
  const { city } = useSelector((state) => state.UIReducer);
  const { searchValue } = useSelector((state) => state.GetGlobalSearch);
  const { idService, nameService } = useSelector((state) => state.GetClinicSlice);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const howManyPages = Math.ceil(data?.count / 10);

  useEffect(() => {
    dispatch(getClinic({ city, searchValue, idService, currentPage }));
    window.scrollTo(0, 0);
  }, [city, searchValue, idService, currentPage]);

  const skeletons = [...new Array(7)].map((_, index) => <SkeletonCardClinic key={index} />);

  const cityName =
    city === '92b89611-4119-4936-8a60-61d25348ad26'
      ? 'Бишкек'
      : city === 'ca346822-2a3d-466f-84e7-a9ada2626ab8'
      ? 'Ош'
      : '';

  const clinics = loading ? (
    skeletons
  ) : error || data.results?.length === 0 ? (
    <NotFound style={{ height: 'calc(100vh - 430px)' }} />
  ) : (
    data.results?.map((data) => <CardClinic data={data} key={data.id} />)
  );

  return (
    <div className={'container-clinic'}>
      <div className="wrapper-clinic">
        <div className="crumbLinks-clinic">
          <Breadcrumbs service={nameService} />
        </div>
        <div className="infoDoctors-clinic">
          <h1>
            Все {nameService || 'клиники'} города {cityName}
          </h1>
        </div>
        <SearchForm placeholder={'Клиники'} />
        <div className={'wrapper-card'}>{clinics}</div>
        <div className="pagination-block-clinic">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default ClinicsPage;
