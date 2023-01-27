import React from 'react'
import page from './page.module.css'
import Map from '@components/map/map'
const Home = () => {
  return (
    <section className={page.container}>
      <Map />
    </section>
  )
}
export default Home
