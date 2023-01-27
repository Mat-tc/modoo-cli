import React from 'react'
import page from './page.module.css'
import classNames from 'classnames'
import Topic from '../components/board/topic'
import styles from './board.module.css'
const Board = () => {
  return (
    <section className={classNames(page.container, styles.container)}>
      <Topic title='핫톡' />
      <Topic title='복싱톡' />
      <Topic title='이것저것톡' />
    </section>
  )
}

export default Board
