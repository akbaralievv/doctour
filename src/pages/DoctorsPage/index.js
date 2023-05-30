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
import PaginationDocs from "../../Functions/PaginationDoctors/PaginationDocs";

function DoctorsPage() {
  const [sorActive,setSortActive]=useState(false)
  const [doctors,setDoctors]=useState([])
  const [sortByRating,setSortByRating]=useState('')
  const [sortStage,setSortStage]=useState('')
  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage]=useState(7)


  const fetchDoctors= async ()=>{
    const res = await axios.get(`https://6470c3c53de51400f724e60f.mockapi.io/api/v1/doctors`)
    setDoctors(res.data)
  }
  useEffect(()=>{
    fetchDoctors()
  },[])

  const sortU=(arr)=>{
    const sorted = arr.sort((b,a)=>(a.stage)-(b.stage))
    setDoctors(sorted)
    setSortStage('up')
    return sorted
  }
  const sortD=(arr)=>{
    const sorted = arr.sort((a,b)=>(a.stage)-(b.stage))
    setDoctors(sorted)
    setSortStage('down')
    return sorted
  }

  const setSortBlock=()=>{
    setSortActive(!sorActive)
  }

  const sortRatingUp=(arr)=>{
    const sorted = arr.sort((b,a)=>(a.price)-(b.price))
    setDoctors(sorted)
    setSortByRating('desc')
    console.log(sorted)
    return sorted
  }

  const sortRatingDawn=(arr)=>{
    const sorted = arr.sort((a,b)=>(a.price)-(b.price))
    setDoctors(sorted)
    setSortByRating('asc')
    return sorted
  }

  const sortPriceUp=()=>{
    sortRatingUp(doctors)
  }
  const sortPriceDown=()=>{
    sortRatingDawn(doctors)
  }

  const sortStageUp = () => {
    sortU(doctors)
  }
  const sortStageD = () => {
    sortD(doctors)
  }
  useEffect(()=>{
    sortPriceUp()
    sortStageUp()
  },[])
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = doctors.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(doctors.length/postsPerPage)





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
                <img onClick={sortPriceUp} src={sortByRating==="asc"?arrowSortU:arrowSortUL}/>
                <img onClick={sortPriceDown} src={sortByRating==="desc"?arrowSortD:arrowSortDL}/>
              </div>
            </div>
            <div className="stage">
              по стажу
              <div className="arrows">
                <img onClick={sortStageUp} src={sortStage==="up"?arrowSortUL:arrowSortU}/>
                <img onClick={sortStageD} src={sortStage=="down"?arrowSortDL:arrowSortD}/>
              </div>
            </div>
          </div>

        </div>
      </div>


      {currentPosts.map((e)=><CardDoctor data={e}/>)}
      <div className="pagination-block">
        <PaginationDocs setCurrentPage={setCurrentPage} pages={howManyPages}/>
      </div>
    </div>
  </div>;
}

export default DoctorsPage;
