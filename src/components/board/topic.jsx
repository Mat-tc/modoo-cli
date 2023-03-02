import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '@/App'
import styles from './topic.module.css'
import button from '@css/button.module.css'
const Topic = (props) => {
  const { darkMode } = useContext(ThemeContext)
  const data = [
    { id: 1, title: '안녕 나는 김가정 ', comment: 41 },
    { id: 2, title: '글씨체 어때?', comment: 41 },
    { id: 3, title: 'Swaziland', comment: 41 },
    { id: 5, title: 'Azerbaijan', comment: 41 },
    { id: 41, title: 'Papua New Guinea', comment: 41 },
  ]
  return (
    <div className={classNames('card', darkMode ? 'dark' : 'light')}>
      <div className={styles.titleContainer}>
        <h4>💬 {props.title}</h4>
        <dd className={classNames(styles.gotoLink, button.btn)}>바로가기</dd>
      </div>
      <div className={styles.ranks}>
        {data.map((row) => {
          return (
            <li key={row.id} className={styles.list}>
              <span className={styles.title}>{row.title}</span>
              <dd className={classNames('text-secondary', styles.comment)}>
                ({row.comment})
              </dd>
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default Topic
