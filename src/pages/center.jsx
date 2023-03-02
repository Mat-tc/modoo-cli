import React, { useContext } from "react"
import page from "./page.module.css"
import Map from "@components/map/map"
import styles from "./center.module.css"
import classNames from "classnames"
import { ThemeContext } from "@/App"
const Center = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <section className={page.container}>
      <div className={styles.container}>
        <Map width="calc(100% - 300px)" />
        <div
          className={classNames(
            "clay",
            "card",
            darkMode ? "dark" : "light",
            styles.topOne
          )}
        >
          <h4>
            <span className={styles.highlight}>👏</span> 우리동네{" "}
            <span className={styles.highlight}>1위</span>
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Center
