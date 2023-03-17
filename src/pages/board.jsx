import React, { useState, useContext, useEffect } from 'react'
import page from './page.module.css'
import classNames from 'classnames'
import Topic from '../components/board/topic'
import styles from './board.module.css'
import btn from '@css/button.module.css'
import Header from '@components/board/header/header'
import Search from '@components/board/header/search'
import { ThemeContext } from '@/App'

import { useNavigate } from 'react-router-dom'

import { getCategories } from '../api/board/category/category'
const Board = () => {
  const navigate = useNavigate()
  const { darkMode } = useContext(ThemeContext)
  const [categories, setCategories] = useState([])
  const toCategory = (id) => {
    navigate(`/board/category/${id}`)
  }
  useEffect(()=>{
    getCategories().then(res => setCategories(res.data))
  }, [])
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
            onClick={()=> toCategory(title.id)}
          >
            {title.name}
          </dd>
        ))}
      </section>
    </main>
  )
}

export default Board
