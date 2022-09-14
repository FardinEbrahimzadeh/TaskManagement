import React from "react";
import { Link } from "react-router-dom";
import Footer from '../Icons/Footer.svg';

export const LoginPage = () => {
  return (
    <div>
      <div className="div1">
        <h6 className="firsthead" style={{ marginBottom: "30px" }}>به برنامه مدیریت وظایف خوش آمدید</h6>
        <div className="div3">
          <p className="email">ایمیل</p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Recipient's email" aria-describedby="basic-addon2" />
          </div>
          <p className="password">رمزعبور</p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Recipient's password" aria-describedby="basic-addon2" />
          </div>
          <br></br>
          <button type="button" id="btn" className="btn btn-warning">ورود</button>
          <br></br>
          <br></br>
          <Link className="link" id="link" to="/User" style={{ marginLeft: "148px" }}>
            ایجادحساب کاربری جدید
          </Link>
        </div>
      </div>
      <img src={Footer} alt="svg file" width={1349} />
    </div>
  );
};

