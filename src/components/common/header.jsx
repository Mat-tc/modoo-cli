import React from 'react'
import styles from './header.module.css'
import btn from '@css/button.css'
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <h2>PICKY</h2>
            </div>
            <div className={styles.menuContainer}>
                <li>시설 조회</li>
                <li>이용권</li>
                <li>커뮤니티</li>
            </div>
            <div className={styles.loginContainer}>
                <dd className={styles.loginBtn}>로그인</dd>
            </div>
        </div>
    )
}

export default Header
