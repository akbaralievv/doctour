import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import CardDoctor from '../../components/CardDoctor';
import './DoctorModule.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import SearchForm from '../../components/SearchForm';

function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const { city } = useSelector((state) => state.UIReducer);

  const fetchDoctors = async () => {
    const res = await axios.get(`https://6470c3c53de51400f724e60f.mockapi.io/api/v1/doctors`);
    setDoctors(res.data);
  };
  useEffect(() => {
    fetchDoctors();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = doctors.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(doctors.length / postsPerPage);

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
