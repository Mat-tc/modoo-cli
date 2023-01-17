import React from 'react'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <h2>PICKY</h2>
            </div>
            <div className={styles.menuContainer}>
                <li className={styles.menu}>시설 조회</li>
                <li className={styles.menu}>이용권</li>
                <li className={styles.menu}>커뮤니티</li>
            </div>
            <div className={styles.loginContainer}>
                <dd className={styles.loginBtn}>로그인</dd>
            </div>
        </div>
    )
}

export default Header
