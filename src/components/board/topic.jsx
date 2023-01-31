import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '@/App'
import styles from './topic.module.css'
import button from '@css/button.module.css'
const Topic = (props) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={classNames('clay', 'card', darkMode ? 'dark' : 'light')}>
      <div className={styles.titleContainer}>
        <dd>💬 {props.title}</dd>
        <dd className={classNames(styles.gotoLink, button.btn)}>바로가기</dd>
      </div>
      <div className={styles.ranks}>
        <li>Palestinian Territories</li>
        <li>Madagascar</li>
        <li>Congo - Brazzaville</li>
        <li>Poland</li>
      </div>
    </div>
  )
}

export default Topic
