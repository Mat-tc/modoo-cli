import React from "react"
import page from "./page.module.css"
import CenterInfo from "../components/center/centerInfo"
import CenterContent from "../components/center/centerContent"
const CenterInfoPage = () => {
  return (
    <section className={page.container}>
      <CenterInfo />
      <hr />
      <CenterContent />
    </section>
  )
}

export default CenterInfoPage
