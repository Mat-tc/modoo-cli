import React from 'react'
import page from './page.module.css'
import { Route, Routes } from 'react-router-dom'
import styles from './board.module.css'
import Search from '@components/board/header/search'
import Home from '@components/board/home'
import List from '@components/board/list'

const Board = () => {
  return (
    <main className={page.container}>
      <div className={styles.flex}>
        <Search />
      </div>

      <div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/list/:categoryId' element={<List />}></Route>
        </Routes>
      </div>
    </main>
  )
}

export default Board
