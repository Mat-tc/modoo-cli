import React, { useContext } from 'react'
import { ReactComponent as Moon } from '@icon/moon.svg'
import { ReactComponent as Sun } from '@icon/sun.svg'
import styles from './themeToggle.module.css'
import button from '@css/button.module.css'
import { ThemeContext } from '../../App'
const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const theme = darkMode ? 'light' : 'dark'

  const clickThemeHandler = (theme) => {
    console.log(theme)
    setDarkMode(!darkMode)
    document.documentElement.className = theme
  }
  return (
    <div className='toggle-wrapper'>
      {darkMode ? (
        <li
          className={`${styles.themeIcon} ${button.btn}`}
          onClick={() => clickThemeHandler(theme)}
        >
          <Sun width='15' height='15' fill='white' />
        </li>
      ) : (
        <li
          className={`${styles.themeIcon} ${button.btn}`}
          onClick={() => clickThemeHandler(theme)}
        >
          <Moon width='15' height='15' fill='#000' />
        </li>
      )}
    </div>
  )
}

export default ThemeToggle
