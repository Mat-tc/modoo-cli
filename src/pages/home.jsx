import React from "react"
import styles from "./page.module.css"
import Map from "@components/map/map"
const Home = () => {
  return (
    <section className={styles.container}>
      <Map />
    </section>
  )
}
export default Home
