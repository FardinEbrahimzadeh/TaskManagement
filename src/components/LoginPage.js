import React from 'react'
import { UserAccount } from './UserAccount'

export const LoginPage = () => {
    return (
        <div>
            <div class="div1">
                <h5 class="firsthead">به برنامه مدیریت وظایف خوش آمدید</h5>
                <div class="div3">
                    <p class="email">ایمیل</p>
                    <input class="inputemail" type="email" /><br></br>
                    <p class="password">رمز</p>
                    <input class="inputemail" type="password" /><br></br>
                    <p class="repeat-password">تکراررمز</p>
                    <input class="inputemail" type="password" /><br></br><br></br>
                    <button type="button" class="btn btn-success">ورود</button><br></br><br></br>
                    <a href={UserAccount} class="link">ایجاد حساب کاربری جدید</a>
                </div>
            </div>
        </div>
    )
}