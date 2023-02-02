import React from "react"
// import { useNavigate } from "react-router-dom"
import styles from "../components/login/login.module.css"
import page from "./page.module.css"
import classNames from "classnames"

const Login = () => {
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
              placeholder="ID"
              id="id"
            />
          </div>

          <div className={styles.inputForm}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
        </div>

        <button className={styles.LoginBtn}>로그인</button>

        <div className={styles.separate}>
          <p>OR</p>
        </div>

        <button className={styles.KakaoBtn}>카카오톡으로 로그인</button>
        <button className={styles.NaverBtn}>네이버로 로그인</button>
        <button className={styles.GoogleBtn}>구글로 로그인</button>

        <p className={classNames(styles.forgetID)}>
          아이디를 잊으셨나요?&nbsp; &nbsp;
          <span className="goto">아이디찾기</span>
          <span className="goto">회원가입</span>
        </p>
      </div>
    </section>
  )
}
export default Login
