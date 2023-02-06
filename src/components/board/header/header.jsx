import React, { useContext } from 'react'
import styles from './header.module.css'
import { ThemeContext } from '@/App'
import { ReactComponent as User } from '@icon/user.svg'
import classNames from 'classnames'
const Header = (props) => {
  const { darkMode } = useContext(ThemeContext)
  const theme = darkMode ? 'light' : 'dark'

  return (
    <section className={styles.subContainer}>
      <h3>{props.title}</h3>
      <dd className={classNames('goto', 'flex')}>
        <User
          width='15'
          height='15'
          fill={theme == 'dark' ? 'black' : '#fff'}
        />
        <h5>내가 쓴글</h5>
      </dd>
    </section>
  )
}
export default Header
