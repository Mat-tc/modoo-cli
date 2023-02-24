import React from 'react'
import styles from './sidenav.module.css'
import classNames from 'classnames'
const Sidenav = () => {
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
    <div className={classNames(styles.container)}>
      <h4 className={styles.padding}>카테고리</h4>
      {categories.map((item) => (
        <li className={classNames(styles.item, 'goto')} key={item.id}>
          {item.title}
        </li>
      ))}
    </div>
  )
}
export default Sidenav
