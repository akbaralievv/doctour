import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import CardDoctor from '../../components/CardDoctor';
import './DoctorModule.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import SearchForm from '../../components/SearchForm';
import { getUsers } from '../../redux/slices/GetUsersSlice';

function DoctorsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const { city } = useSelector((state) => state.UIReducer);
  const { data } = useSelector((state) => state.GetUsersSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(city));
  }, [city]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(data.length / postsPerPage);

  return (
    <div className={'cont'}>
      <div className="wrapper">
        <div className="crumbLinks">
          <Breadcrumbs />
        </div>
        <div className="infoDoctors">
          <h1>Все врачи города {city === 'bishkek' ? 'Бишкек' : city === 'osh' ? 'Ош' : ''}</h1>
        </div>
        <SearchForm placeholder={'Врачи'} style={{ marginBottom: '48px' }} />

        {currentPosts.map((e, id) => (
          <CardDoctor data={e} key={id} />
        ))}
        <div className="pagination-block">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
