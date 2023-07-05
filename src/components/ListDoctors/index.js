import React, { useEffect, useState } from 'react';
import style from './ListDoctors.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpecialty } from '../../redux/slices/GetSpecialtySlice.js';
import { setIdSpecialty, setNameSpecialty } from '../../redux/slices/GetDoctorsSlice';
import { setSearch } from '../../redux/slices/GetGlobalSearch';

function ListDoctors() {
  const { data, loading } = useSelector((state) => state.GetSpecialtySlice);
  const [objArray, setObjArray] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (id, name) => {
    dispatch(setIdSpecialty(id));
    dispatch(setNameSpecialty(name));
    dispatch(setSearch(''));
  };

  useEffect(() => {
    if (data && !loading) {
      const firstChar = data?.map((item) => item.name[0]);
      const set = new Set([...firstChar]);
      const setArray = [...set];
      const obj = {};
      setArray?.map((item) => {
        obj[item] = [];
        data.map((i) => {
          if (item === i.name[0]) {
            obj[item].push(i);
          }
        });
      });
      const objArray = Object.entries(obj).map(([key, value]) => {
        return { [key]: value };
      });
      setObjArray(objArray);
    }
  }, [data, loading]);

  return (
    <>
      <h2 className={style.h2}>Специальности врачей</h2>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.inner}>
            {objArray?.map((item, id) => (
              <ul key={id}>
                <li>
                  <h3>{Object.keys(item)}</h3>
                </li>
                {Object.values(item)?.map((data) =>
                  data.map((item) => (
                    <Link
                      to="/doctors"
                      key={item.id}
                      onClick={() => handleClick(item.id, item.name)}>
                      <li>
                        <span className={style.count}>{item.doctors_count}</span>
                        <span>{item.name}</span>
                      </li>
                    </Link>
                  )),
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListDoctors;
