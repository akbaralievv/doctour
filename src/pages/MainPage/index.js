import React from 'react';
import SearchDoctors from "../../components/SearchDoctors";
import ListDoctors from "../../components/ListDoctors";
import TopDoctors from "../../components/TopDoctors";
import Pagination from "../../components/Pagination";

function MainPage() {
  return (
  <div style={{background: '#F6F6F6'}}>
      <SearchDoctors />
      <TopDoctors />
      <ListDoctors />
      <Pagination />
  </div>
  );
}

export default MainPage;
