import React from "react";
import styles from "../components/login/login.module.css";

const Login = () => {
  return (
    <div className={styles.LoginContainer}>
      <h1>로그인</h1>
      <p className={styles.pd}>간편하게 가입하고, 원하실 때 해지할 수 있어요</p>

      <div className={styles.Loginpa}>
        <div className={styles.LoginID}>
          <input
            type="email"
            placeholder="ID"
            className={styles.inputID}
            id="id"
          />
        </div>

        <div className={styles.LoginPassword}>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            id="password"
          />
        </div>

        <button className={styles.LoginBtn}>로그인</button>
      </div>

      <div className={styles.separate}>
        <p>OR</p>
      </div>

      <button className={styles.KakaoBtn}>카카오톡으로 로그인</button>
      <button className={styles.NaverBtn}>네이버로 로그인</button>
      <button className={styles.GoogleBtn}>구글로 로그인</button>

      <p className={styles.forgetID}>
        아이디를 잊으셨나요?&nbsp; &nbsp;<a href="">아이디찾기</a>&nbsp; &nbsp;
        <a href="./signup">회원가입</a>
      </p>
    </div>
  );
};
export default Login;
