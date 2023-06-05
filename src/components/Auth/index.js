import React, { useState } from 'react';
import { Formik } from 'formik';

import styles from './Formik.module.css';
import eyeShow from '../../assets/icons/Show.svg';
import eyeHide from '../../assets/icons/Hide.svg';

const Basic = () => {
  const [eye, setEye] = useState(true);
  const handleClick = (isTrue) => {
    setEye(isTrue);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              Логин
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Логин"
              />
            </label>
            {errors.email && touched.email && errors.email}
            <label>
              Пароль
              <div>
                <input
                  type={eye ? 'password' : 'text'}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Пароль"
                />
                {eye ? (
                  <img src={eyeShow} alt="icon" onClick={() => handleClick(false)} />
                ) : (
                  <img src={eyeHide} alt="icon" onClick={() => handleClick(true)} />
                )}
              </div>
            </label>
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Войти
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
