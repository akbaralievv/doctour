import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardDoctor from '../../components/CardDoctor';
import './DoctorModule.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import SearchForm from '../../components/SearchForm';
import { getDoctors } from '../../redux/slices/GetDoctorsSlice';

function DoctorsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [value, setValue] = useState('');
  const { city } = useSelector((state) => state.UIReducer);
  const { data, loading, error } = useSelector((state) => state.GetDoctorsSlice);
  const dispatch = useDispatch();
  const { idSpecialty, nameSpecialty } = useSelector((state) => state.GetDoctorsSlice);

  useEffect(() => {
    dispatch(getDoctors({ city, value, idSpecialty }));
  }, [city, value.trim(), idSpecialty]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(data.length / postsPerPage);

  return (
    <div className={'cont'}>
      <div className="wrapper">
        <div className="crumbLinks">
          <Breadcrumbs specialty={nameSpecialty} />
        </div>
        <div className="infoDoctors">
          <h1>
            Все {nameSpecialty || 'врачи'} города{' '}
            {city === '1' ? 'Бишкек' : city === '2' ? 'Ош' : ''}
          </h1>
        </div>
        <SearchForm
          placeholder={'Врачи'}
          style={{ marginBottom: '48px' }}
          value={value}
          setValue={setValue}
        />

        {currentPosts.map((data) => (
          <CardDoctor data={data} key={data.id} />
        ))}
        <div className="pagination-block">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;
