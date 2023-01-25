import React from 'react'
import styles from './header.module.css'
import button from '@css/button.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h2>
          <Link to={''}>PICKY</Link>
        </h2>
      </div>
      <div className={styles.menuContainer}>
        <li className={`${styles.menu} ${button.btn}`}>
          <Link to={'center'}>센터조회</Link>
        </li>
        <li className={`${styles.menu} ${button.btn}`}>
          <Link to={'ticket'}>이용권</Link>
        </li>
        <li className={`${styles.menu} ${button.btn}`}>
          <Link to={'board'}>커뮤니티</Link>
        </li>
        <li className={`${styles.menu} ${button.btn}`}>
          <Link to={'faq'}>문의</Link>
        </li>
      </div>
      <div className={styles.loginContainer}>
        <li className={`${styles.menu} ${button.btn}`}>
          <Link to={'login'}>로그인</Link>
        </li>
      </div>
    </div>
  )
}

export default Header
