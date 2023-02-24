import React from 'react'
import Header from '@components/board/header/header'
import styles from './list.module.css'
import Sidenav from './list/sidenav'
import Item from './list/item'
const List = () => {
  const data = [
    {
      category: '복싱',
      id: 1,
      title: 'stricsacng',
      content: 'strinzxg',
      dateTime: '2023-02-04T19:52:13.687137',
      hits: 0,
      likes: 0,
      comments: 0,
      writer: '뭘보냐',
    },
    {
      category: '복싱',
      id: 2,
      title: 'striansssg',
      content:
        'stssrsssssssssssssssssssssssssssssssxxxxxxxxxxssssssssssssssxxssssssssssssxssssssssssssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxssssssssssssssssssssssssssssssssss',
      dateTime: '2023-02-03T22:27:56.859208',
      hits: 0,
      likes: 0,
      comments: 0,
      writer: '뭘보냐',
    },
    {
      category: '복싱',
      id: 3,
      title: 'strinsssg',
      content: 'stssring',
      dateTime: '2023-02-03T22:27:52.440707',
      hits: 0,
      likes: 0,
      comments: 0,
      writer: '뭘보냐',
    },
  ]
  return (
    <div className={styles.container}>
      <Sidenav />

      <div className={styles.contentsContainer}>
        <Header title='복싱톡' />

        {data.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default List
