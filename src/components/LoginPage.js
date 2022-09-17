import React from "react";
import { Link } from "react-router-dom";
import Footer from '../Icons/Footer.svg';
import { Formik } from 'formik';

export const LoginPage = () => {
  return (
    <Formik
      initialValues={{ name: '' }}

      onSubmit={(values) => {
        console.log("Form values: ", values);
      }}

      validate={values => {
        let errors = {}

        if (!values.email) {
          errors.email = "please Enter your email !"
        }
        
        if (!values.password) {
          errors.password = "please Enter your password !"
        }

        return errors;
      }}

    >




      {
        ({ handleSubmit, handleChange, values, errors }) => (
          <div>
            <div className="div1">
              <h6 className="firsthead" style={{ marginBottom: "30px" }}>به برنامه مدیریت وظایف خوش آمدید</h6>
              <div className="div3">
                <form onSubmit={handleSubmit} >
                  <p className="email">ایمیل</p>
                  <div className="input-group mb-3">
                    {/* type=email */}
                    <input onChange={handleChange} value={values.email} type="email" name="email" className="form-control" aria-label="Recipient's email" aria-describedby="basic-addon2" />
                  </div>
                  {
                    errors.email && (
                      <div style={{ color: "red" }}>
                        {errors.email}
                      </div>
                    )
                  }
                  <p className="password">رمزعبور</p>
                  <div className="input-group mb-3">
                    <input type="password" name="password" value={values.password} className="form-control" aria-label="Recipient's password" aria-describedby="basic-addon2" />
                  </div>
                  {
                    errors.password && (
                      <div style={{ color: "red" }}>
                        {errors.password}
                      </div>
                    )
                  }
                  <br></br>
                  <button type="submit" id="btn" className="btn btn-warning">ورود</button>

                  <br></br>
                  <br></br>
                  <Link className="link" id="link" to="/User" style={{ marginLeft: "148px" }}>
                    ایجادحساب کاربری جدید
                  </Link>
                </form>
              </div>
            </div>
            <img src={Footer} alt="svg file" width={1349} />
          </div>
        )
      }
    </Formik>
  );
};

