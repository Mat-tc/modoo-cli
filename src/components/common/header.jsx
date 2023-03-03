import React from "react";
import styles from "./header.module.css";
import button from "@css/button.module.css";
import { Link } from "react-router-dom";

// import { useContext } from 'react'
// import { ThemeContext } from '../../App'
import ThemeToggle from "./themeToggle";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h2>
          <Link to={""}>PICKY</Link>
        </h2>
      </div>
      <div className={styles.menuContainer}>
        <h4 className={`${styles.menu} ${button.btn}`}>
          <Link to={"center"}>센터조회</Link>
        </h4>
        <h4 className={`${styles.menu} ${button.btn}`}>
          <Link to={"ticket"}>이용권</Link>
        </h4>
        <h4 className={`${styles.menu} ${button.btn}`}>
          <Link to={"board"}>커뮤니티</Link>
        </h4>
        <h4 className={`${styles.menu} ${button.btn}`}>
          <Link to={"contact"}>문의</Link>
        </h4>
      </div>
      <div className={styles.loginContainer}>
        <h5 className={`${styles.menu} ${button.btn}`}>
          <Link to={"login"}>로그인</Link>
        </h5>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
