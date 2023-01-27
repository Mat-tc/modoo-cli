import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '@/App'
//import styles from './topic.module.css'
const Topic = (props) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={classNames('clay', 'card', darkMode ? 'dark' : 'light')}>
      <dd>💬 {props.title}</dd>
      <br />
      <li>Palestinian Territories</li>
      <li>Madagascar</li>
      <li>Congo - Brazzaville</li>
      <li>Poland</li>
    </div>
  )
}

export default Topic
