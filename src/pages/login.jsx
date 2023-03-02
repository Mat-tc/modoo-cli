import React from "react"
import styles from "../components/login/login.module.css"
import page from "./page.module.css"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import GoogleLogin from "../components/login/googleLogin"
// 참고 https://devjeong.com/react/react-1/

const Login = () => {
  const navigate = useNavigate()
  return (
    <section className={page.container}>
      <div className={styles.LoginContainer}>
        <h1 className={styles.h1}>로그인</h1>
        <p className={styles.pd}>
          간편하게 가입하고, 원하실 때 해지할 수 있어요
        </p>

        <div className={styles.loginForm}>
          <div className={styles.inputForm}>
            <input
              className={styles.input}
              type="email"
              placeholder="아이디"
              id="id"
            />
          </div>

          <div className={styles.inputForm}>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호"
              id="password"
            />
          </div>
        </div>

        <button className={styles.LoginBtn}>로그인</button>

        <div className={styles.separate}>
          <p>OR</p>
        </div>

        <div className={styles.btnGroup}>
          <button className={styles.KakaoBtn}>K</button>
          <button className={styles.NaverBtn}>N</button>
          <GoogleLogin />
        </div>

        <p className={classNames(styles.forgetID)}>
          아이디를 잊으셨나요?&nbsp; &nbsp;
          <span className="goto">아이디찾기</span>
          <span className="goto" onClick={() => navigate("/signup")}>
            회원가입
          </span>
        </p>
      </div>
    </section>
  )
}
export default Login
