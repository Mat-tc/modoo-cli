/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react"
import useGeolocation from "react-hook-geolocation"
import styles from "./map.module.css"
import { Map, MapMarker } from "react-kakao-maps-sdk"
/*global kakao*/
const KakaoMap = (props) => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: props.width, height: "500px" }}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
    </Map>
  )
}

export default KakaoMap
