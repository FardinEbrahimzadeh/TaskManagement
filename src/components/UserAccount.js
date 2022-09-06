import React from 'react'

export const UserAccount = () => {
  return (
    <div class="div2">
      <h5>ایجادحساب کاربری جدید</h5>
      <p class="email">:ایمیل</p>
      <input class="inputemail" type="email" /><br></br>
      <p class="password">:رمز</p>
      <input class="inputemail" type="password" /><br></br>
      <p class="repeat-password">تکراررمزعبور</p>
      <input class="inputemail" type="password" /><br></br>
      <br></br>
      <button type="button" class="btn btn-outline-success">ثبت</button><br></br>
    </div>
  )
}
