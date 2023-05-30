import React from 'react';

import SearchDoctors from '../../components/SearchDoctors';
import TopDoctors from '../../components/TopDoctors';
import ListDoctors from '../../components/ListDoctors';
import Slider from '../../components/Slider';

function MainPage() {
  return (
    <div>
      <SearchDoctors />
      <TopDoctors />
      <ListDoctors />
      <Slider />
    </div>
  );
}

export default MainPage;
