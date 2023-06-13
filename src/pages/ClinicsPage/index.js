import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CardClinic from '../../components/CardClinic';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import './moduleClinic.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import SearchForm from '../../components/SearchForm';

function ClinicsPage() {
  const data = [
    {
      price: 1,
      rating: 3,
    },
    {
      price: 111,
      rating: 31,
    },
    {
      price: 333,
      rating: 3,
    },
    {
      price: 87,
      rating: 33,
    },
    {
      price: 12,
      rating: 30,
    },
    {
      price: 100,
      rating: 3,
    },
  ];

  const [sorActives, setSortActives] = useState(false);
  const [clinic, setClinic] = useState(data);
  const [sortByRating, setSortByRating] = useState('');
  const [sortStage, setSortStage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const { city } = useSelector((state) => state.UIReducer);

  const sortUClinic = (arr) => {
    const sorted = arr.sort((b, a) => a.stage - b.stage);
    setClinic(sorted);
    setSortStage('up');
    return sorted;
  };
  const sortDClinic = (arr) => {
    const sorted = arr.sort((a, b) => a.stage - b.stage);
    setClinic(sorted);
    setSortStage('down');
    return sorted;
  };

  const setSortBlockClinic = () => {
    setSortActives(!sorActives);
  };

  const sortRatingUpsClinic = (arr) => {
    const sorted = arr.sort((b, a) => a.price - b.price);
    setClinic(sorted);
    setSortByRating('desc');
    return sorted;
  };
  const sortRatingDawnClinic = (arr) => {
    const sorted = arr.sort((a, b) => a.price - b.price);
    setClinic(sorted);
    setSortByRating('asc');
    return sorted;
  };

  const sortStageUpClinic = () => {
    sortUClinic(clinic);
  };
  const sortStageDClinic = () => {
    sortDClinic(clinic);
  };

  const sortPriceU = () => {
    sortRatingUpsClinic(clinic);
  };
  const sortPriceDown = () => {
    sortRatingDawnClinic(clinic);
  };

  useEffect(() => {
    sortStageUpClinic();
    sortPriceU();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = clinic.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(clinic.length / postsPerPage);

  return (
    <div className={'container-clinic'}>
      <div className="wrapper-clinic">
        <div className="crumbLinks-clinic">
          <Breadcrumbs />
        </div>
        <div className="infoDoctors-clinic">
          <h1>Все Клиники города {city === 'bishkek' ? 'Бишкек' : city === 'osh' ? 'Ош' : ''}</h1>
        </div>
        <SearchForm placeholder={'Клиники'} style={{ marginBottom: '48px' }} />

        {currentPosts.map((e, id) => (
          <CardClinic data={e} key={id} />
        ))}
        <div className="pagination-block-clinic">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default ClinicsPage;
