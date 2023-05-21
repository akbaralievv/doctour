import React from 'react';
import SearchDoctors from "../../components/SearchDoctors";
import ListDoctors from "../../components/ListDoctors";
import TopDoctors from "../../components/TopDoctors";

function MainPage() {
  return (
  <div>
      <h2>MainPagem</h2>
      <SearchDoctors/>
      <TopDoctors/>
      <ListDoctors/>
  </div>
  );
}

export default MainPage;
