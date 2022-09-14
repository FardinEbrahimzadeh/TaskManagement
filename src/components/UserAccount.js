import React from 'react'
import Footer from '../Icons/Footer.svg';

export const UserAccount = () => {
  return (
    <div>
      <div class="div2">
        <h6 style={{ marginBottom: "40px" }}>ایجادحساب کاربری جدید</h6>
        <p className="email">ایمیل</p>
        <div className="input-group mb-3">
          <input type="email" className="form-control" aria-label="Recipient's email" aria-describedby="basic-addon2" />
        </div>
        <p className="password">رمزعبور</p>
        <div className="input-group mb-3">
          <input type="password" className="form-control" aria-label="Recipient's password" aria-describedby="basic-addon2" />
        </div>
        <p className="repeat-password">تکراررمزعبور</p>
        <div className="input-group mb-3">
          <input type="password" className="form-control" aria-label="Recipient's password" aria-describedby="basic-addon2" />
        </div>
        <br></br>
        <button type="button" id="btn" className="btn btn-warning">ثبت</button>
        <button type="button" id='btn-success' className="btn btn-outline-secondary">بازگشت</button><br></br>
      </div>
      <img src={Footer} alt="svg file" width={1349} />
    </div>
  )
}
