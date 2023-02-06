import React, { useContext } from "react"
import styles from "./search.module.css"
import { ReactComponent as SearchIcon } from "@icon/search.svg"
import { ThemeContext } from "@/App"

const Search = () => {
  const { darkMode } = useContext(ThemeContext)
  const theme = darkMode ? "light" : "dark"
  return (
    <div className={styles.float}>
      <div className={styles.container}>
        <input type="text" className={styles.input} />
        <SearchIcon
          width={15}
          height={15}
          fill={theme == "dark" ? "#fff" : "black"}
        />
      </div>
    </div>
  )
}

export default Search
