import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <div class="div1">
        <h5 class="firsthead">به برنامه مدیریت وظایف خوش آمدید</h5>
        <div class="div3">
          <p class="email">ایمیل</p>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Email..." aria-label="Recipient's email" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">@example.com</span>
              </div>
          </div>
          <p class="password">رمزعبور</p>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="password..." aria-label="Recipient's password" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">password</span>
              </div>
          </div>
          <br></br>
          <button type="button" id="btn" class="btn btn-warning">
            ورود
          </button>
          <br></br>
          <br></br>
          <Link className="link" to="/User">
            ایجادحساب کاربری جدید
          </Link>
        </div>
      </div>
    </div>
  );
};
