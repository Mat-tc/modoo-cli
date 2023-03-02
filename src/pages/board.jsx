import React, { useContext } from 'react'
import page from './page.module.css'
import classNames from 'classnames'
import Topic from '../components/board/topic'
import styles from './board.module.css'
import btn from '@css/button.module.css'
import Header from '@components/board/header/header'
import Search from '@components/board/header/search'
import { ThemeContext } from '@/App'

import { useNavigate } from 'react-router-dom'

const Board = () => {
  const navigate = useNavigate()
  const { darkMode } = useContext(ThemeContext)
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
      <div className={styles.flex}>
        <Search />
        <button
          className={classNames(
            btn.btn,
            'clay',
            'btn',
            darkMode ? 'dark' : 'light'
          )}
          onClick={() => navigate('/board/write')}
        >
          새 글 작성하기
        </button>
      </div>
      <Header title='🔥 떠오르는 인기 톡' />

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
