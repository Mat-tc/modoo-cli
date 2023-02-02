import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/signup/signup.module.css";

const Signup = () => {
  let navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [isSamePwAndRePw, setIsSamePwAndRePw] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.MainSignup}>
        <span style={{ fontSize: "60px", fontWeight: "bold" }}>회원가입</span>

        <div style={{ width: "100%" }}>
          <input
            className={styles.signup_id}
            type="text"
            placeholder="아이디"
          />

          <input
            className={styles.signup_pw}
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => {
              console.log(e.target.value);
              setPw(e.target.value);
            }}
            onBlur={() => {
              if (rePw !== "" && pw !== rePw) {
                setIsSamePwAndRePw(false);
              } else {
                setIsSamePwAndRePw(true);
              }
            }}
          />

          <input
            className={styles.signup_rePw}
            type="password"
            placeholder="비밀번호 재확인"
            value={rePw}
            disabled={pw === ""}
            onChange={(e) => {
              console.log(e.target.value);
              setRePw(e.target.value);
            }}
            onBlur={() => {
              // 비밀번호랑 비밀번호 재확인이 다를때
              // input창 밑에 비밀번호가 일치하지 않는다고 뜸
              if (pw !== rePw) {
                setIsSamePwAndRePw(false);
              } else {
                setIsSamePwAndRePw(true);
              }
            }}
          />
          {isSamePwAndRePw === false && (
            <span style={{ fontSize: "14px", color: "red" }}>
              비밀번호가 일치하지 않습니다.
            </span>
          )}
          <input
            className={styles.signup_name}
            type="text"
            placeholder="이름"
          />

          <div className={styles.signup_bir}>
            <input
              className={styles.signup_birth_yy}
              type="text"
              placeholder="년(4자)"
              maxLength={4}
            />
            <select
              className={styles.signup_birth_mm}
              type="selectbox"
              name="month"
              onChange={() => {}}
            >
              <option value="month">월</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <input
              className={styles.signup_birth_dd}
              type="text"
              placeholder="일"
              maxLength={2}
            />
          </div>

          <select
            className={styles.signup_gender}
            type="selectbox"
            name="gender"
            onChange={() => {}}
          >
            <option value="gender">성별</option>
            <option value="man">남자</option>
            <option value="woman">여자</option>
          </select>

          <input
            className={styles.signup_phone}
            type="text"
            placeholder="전화번호 입력"
          />

          <button
            className={styles.SignupBtn}
            onClick={() => {
              navigate("/login");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
