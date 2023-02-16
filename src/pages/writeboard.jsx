import React from 'react'
import page from './page.module.css'
import Editor from '@components/write-board/editor'
const WriteBoard = () => {
  return (
    <section className={page.container}>
      <Editor />
    </section>
  )
}

export default WriteBoard
