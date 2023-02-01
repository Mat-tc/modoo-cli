/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react"
import useGeolocation from "react-hook-geolocation"
import styles from "./map.module.css"
/*global kakao*/
const Map = () => {
  const geolocation = useGeolocation()
  const container = useRef(null)
  const options = {
    center: new window.kakao.maps.LatLng(
      geolocation.latitude,
      geolocation.longitude
    ), //지도의 중심좌표.
    level: 3,
  }
  useEffect(() => {
    new window.kakao.maps.Map(container.current, options)
  }, [])

  return <div id="map" ref={container} className={styles.container}></div>
}

export default Map
