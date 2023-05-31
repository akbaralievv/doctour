import React, { useEffect, useState } from 'react';
import CardClinic from '../../components/CardClinic';
import arrow from '../../assets/icons/Arrow - Right 2.svg';
import arrowU from '../../assets/icons/Arrow - Up 2.svg';
import arrowD from '../../assets/icons/Arrow - Down 5.svg';
import arrowSortU from '../../assets/icons/Arrow - Up.svg';
import arrowSortUL from '../../assets/icons/ArrowL - Up.svg';
import arrowSortD from '../../assets/icons/Arrow - Down.svg';
import arrowSortDL from '../../assets/icons/ArrowL - Downp.svg';
import PaginationDocs from '../../Functions/PaginationDoctors/PaginationDocs';
import './moduleClinic.css';

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
          <h2>Бишкек</h2>
          <img src={arrow} />
          <h2>Клиники</h2>
        </div>
        <div className="infoDoctors-clinic">
          <h1>Все Клиники города Бишкек</h1>
        </div>
        <div className="sort-clinic">
          <div style={sorActives ? { height: '144px' } : {}} className="sort-block-clinic">
            <div
              onClick={setSortBlockClinic}
              style={
                sorActives
                  ? {
                      background: '#1B6B93',
                      border: '#023246 1px solid',
                      borderRadius: '6px 6px 0 0',
                      color: '#c2e2f2',
                    }
                  : {}
              }
              className="sort-block__info-clinic">
              <span>сортировать по</span>
              <img src={sorActives ? arrowU : arrowD} />
            </div>
            <div className={sorActives ? 'sort-block__choose-clinic' : 'none'}>
              <div className="price-clinic">
                по цене
                <div className="arrows-clinic">
                  <img
                    onClick={sortPriceU}
                    src={sortByRating === 'asc' ? arrowSortU : arrowSortUL}
                  />
                  <img
                    onClick={sortPriceDown}
                    src={sortByRating === 'desc' ? arrowSortD : arrowSortDL}
                  />
                </div>
              </div>
              <div className="stage-clinic">
                по популярности
                <div className="arrows-clinic">
                  <img
                    onClick={sortStageUpClinic}
                    src={sortStage === 'up' ? arrowSortUL : arrowSortU}
                  />
                  <img
                    onClick={sortStageDClinic}
                    src={sortStage == 'down' ? arrowSortDL : arrowSortD}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {currentPosts.map((e) => (
          <CardClinic data={e} />
        ))}
        <div className="pagination-block-clinic">
          <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages} />
        </div>
      </div>
    </div>
  );
}

export default ClinicsPage;
