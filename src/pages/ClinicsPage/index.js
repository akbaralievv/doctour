import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardClinic from '../../components/CardClinic';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import './moduleClinic.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import SearchForm from '../../components/SearchForm';
import { getClinic } from '../../redux/slices/GetClinicSlice';
import SkeletonCardClinic from '../../components/SkeletonCardClinic';

function ClinicsPage() {
  const { data, loading } = useSelector((state) => state.GetClinicSlice);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const { city } = useSelector((state) => state.UIReducer);
  const { searchValue } = useSelector((state) => state.GetGlobalSearch);
  const [notFound, setNotFound] = useState(false);

  const dispatch = useDispatch();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(data?.length / postsPerPage);

  useEffect(() => {
    dispatch(getClinic({ city, searchValue }));
  }, [city, searchValue]);

  useEffect(() => {
    !loading && data?.length === 0 ? setNotFound(true) : setNotFound(false);
  }, [data]);

  const skeletons = [...new Array(7)].map((_, index) => <SkeletonCardClinic key={index} />);

  return (
    <div className={'container-clinic'}>
      <div className="wrapper-clinic">
        <div className="crumbLinks-clinic">
          <Breadcrumbs />
        </div>
        <div className="infoDoctors-clinic">
          <h1>Все Клиники города {city === '1' ? 'Бишкек' : city === '2' ? 'Ош' : ''}</h1>
        </div>
        <SearchForm placeholder={'Клиники'} />
        <div className={'wrapper-card'}>
          {loading ? (
            skeletons
          ) : notFound ? (
            <p>Ничего не найдено</p>
          ) : (
            currentPosts?.map((data) => <CardClinic data={data} key={data.id} />)
          )}
        </div>
        <div className="pagination-block-clinic">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default ClinicsPage;
