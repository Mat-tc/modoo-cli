/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import useGeolocation from 'react-hook-geolocation'
import styles from './map.module.css'
/*global kakao*/
const Map = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const container = useRef(null)
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3,
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
    new kakao.maps.Map(container.current, options)
  }, [])

  return <div id='map' ref={container} className={styles.container}></div>
}

export default Map
