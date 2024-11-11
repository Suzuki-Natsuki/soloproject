import { useState } from 'react'
// import './App.css'

function Login() {
    return (<>
        <img id={"icon"} src={"pic/icon.png"} alt={"icon"}/>
            <div className="login">
                <div >
                    <label>ユーザー名</label>
                    <input type={"text"}/>
                </div>
                <div >
                    <label>パスワード</label>
                    <input type={"password"}/>
                </div>
                <button className={"loginButton"}>ログイン</button>
            </div>

    </>
    )
}

export default Login