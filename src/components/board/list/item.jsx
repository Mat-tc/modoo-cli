import classNames from 'classnames'
import React from 'react'
import styles from './item.module.css'
const Item = (props) => {
  const data = props.item
  return (
    <div className={classNames('card', styles.container)}>
      <div className={styles.titleContainer}>
        <dd className={styles.title}> {data.title}</dd>
        <dd className={styles.hits}>{data.hits}</dd>
      </div>
      <dd className={styles.content}>{data.content}</dd>
    </div>
  )
}

export default Item
