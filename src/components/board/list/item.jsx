import classNames from 'classnames'
import React, { useContext } from 'react'
import styles from './item.module.css'
import { ReactComponent as CommentIcon } from '@icon/comment.svg'
import { ReactComponent as LikeIcon } from '@icon/like.svg'
import { ReactComponent as ViewIcon } from '@icon/eye.svg'
import { ThemeContext } from '@/App'
const Item = (props) => {
  const data = props.item
  const { darkMode } = useContext(ThemeContext)
  const theme = darkMode ? 'light' : 'dark'
  return (
    <div className={classNames('card', styles.container)}>
      <div className={styles.titleContainer}>
        <dd className={styles.title}> {data.title}</dd>
      </div>
      <dd className={styles.content}>{data.content}</dd>
      <div className={styles.etcContainer}>
        <dd className={styles.iconGroup}>
          <ViewIcon
            width={12}
            height={12}
            stroke={theme == 'dark' ? '#666' : 'white'}
          />
        </dd>
        {data.hits}
        <dd className={styles.iconGroup}>
          <LikeIcon
            width={12}
            height={12}
            stroke={theme == 'dark' ? '#666' : '#fff'}
          />
        </dd>
        {data.likes}
        <dd className={styles.iconGroup}>
          <CommentIcon
            width={12}
            height={12}
            stroke={theme == 'dark' ? '#666' : '#fff'}
          />
        </dd>
        {data.comments}
      </div>
    </div>
  )
}

export default Item
