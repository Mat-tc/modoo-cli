import React, { useContext } from 'react'
import page from './page.module.css'
import classNames from 'classnames'
import Topic from '../components/board/topic'
import styles from './board.module.css'
import { ThemeContext } from '@/App'
import { ReactComponent as User } from '@icon/user.svg'
const Board = () => {
  const { darkMode } = useContext(ThemeContext)
  const theme = darkMode ? 'light' : 'dark'

  const categories = [
    { id: 96, title: 'should' },
    { id: 54, title: 'inch' },
    { id: 55, title: 'coming' },
    { id: 2, title: 'under' },
    { id: 40, title: 'mysterious' },
    { id: 57, title: 'or' },
    { id: 58, title: 'married' },
    { id: 80, title: 'diagram' },
    { id: 13, title: 'coal' },
    { id: 37, title: 'manufacturing' },
    { id: 70, title: 'arrive' },
    { id: 38, title: 'cup' },
    { id: 61, title: 'gave' },
    { id: 32, title: 'work' },
    { id: 18, title: 'pay' },
    { id: 36, title: 'stove' },
    { id: 21, title: 'dozen' },
    { id: 47, title: 'castle' },
  ]
  return (
    <main className={page.container}>
      <div className={styles.subContainer}>
        <h3>🔥 떠오르는 인기 톡</h3>
        <dd className={classNames(styles.center, 'goto')}>
          <User
            width='15'
            height='15'
            fill={theme == 'dark' ? 'black' : '#fff'}
          />
          <h5>내가 쓴글</h5>
        </dd>
      </div>
      <section className={classNames(styles.container)}>
        <Topic title='핫톡' />
        <Topic title='복싱톡' />
        <Topic title='이것저것톡' />
      </section>

      <div className={styles.subContainer}>
        <h4>톡 바로가기</h4>
      </div>
      <section className={styles.listContainer}>
        {categories.map((title) => (
          <dd
            className={classNames(styles.gotoCategory, 'goto')}
            key={title.id}
          >
            {title.title}
          </dd>
        ))}
      </section>
    </main>
  )
}

export default Board
