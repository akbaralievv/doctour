import React, {useEffect, useState} from 'react';
import CardDoctor from "../../components/CardDoctor";
import arrow from "../../assets/icons/Arrow - Right 2.svg"
import arrowU from "../../assets/icons/Arrow - Up 2.svg"
import arrowD from "../../assets/icons/Arrow - Down 5.svg"
import arrowSortD from "../../assets/icons/Arrow - Down.svg"
import arrowSortU from "../../assets/icons/Arrow - Up.svg"
import arrowSortDL from "../../assets/icons/ArrowL - Downp.svg"
import arrowSortUL from "../../assets/icons/ArrowL - Up.svg"
import axios from "axios";

import "./DoctorModule.css"

function DoctorsPage() {
  const [sorActive,setSortActive]=useState(false)
  const [doctors,setDoctors]=useState()
  const [sortByRating,setSortByRating]=useState('')

  const fetchDoctors= async ()=>{
    const res = await axios.get(`https://6470c3c53de51400f724e60f.mockapi.io/api/v1/doctors?&sortBy=rating&order=${sortByRating}`)
    setDoctors(res.data)
    console.log(res.data.rating)
  }

  useEffect(()=>{
    fetchDoctors()
  },[sortByRating])

  const setSortBlock=()=>{
    setSortActive(!sorActive)
  }

  const sortRatingUp=()=>{
    if(sortByRating==='desc'){
      setSortByRating('')
    }else {
      setSortByRating('desc')
      console.log('desc')
    }
  }
  const sortRatingDawn=()=>{
    if(sortByRating==='asc'){
      setSortByRating('')
    }else {
      setSortByRating('asc')
      console.log('asc')
    }

  }




  return <div className={'cont'}>
    <div className="wrapper">
      <div className="crumbLinks">
        <h2>Бишкек</h2>
        <img src={arrow}/>
        <h2>Врачи</h2>
      </div>
      <div className="infoDoctors">
        <h1>Все врачи города Бишкек</h1>
      </div>
      <div className="sort">
        <div style={sorActive?{height:'144px'}:{}} className="sort-block">
          <div onClick={setSortBlock} style={sorActive?{background:'#1B6B93', border:'#023246 1px solid',borderRadius:'6px 6px 0 0',color:'#c2e2f2'}:{}} className="sort-block__info">
            <span>сортировать по</span>
            <img src={sorActive?arrowU:arrowD}/>
          </div>
          <div className={sorActive?"sort-block__choose":'none'}>
            <div className="price">
              по цене
              <div className="arrows">
                <img onClick={sortRatingUp} src={arrowSortU}/>
                <img onClick={sortRatingDawn} src={arrowSortD}/>
              </div>
            </div>
            <div className="stage">
              по стажу
              <div className="arrows">
                <img src={arrowSortUL}/>
                <img src={arrowSortDL}/>
              </div>
            </div>
          </div>

        </div>
      </div>


      <CardDoctor/>
    </div>
  </div>;
}

export default DoctorsPage;
