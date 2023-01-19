/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react"

const Map = () => {
  const container = useRef(null)
  const options = {
    center: new KakaoMapContext.maps.LatLng(33.450701, 126.570667),
    level: 3,
  }
  useEffect(() => {
    new kakao.maps.Map(container.current, options)
  }, [])

  return (
    <div
      id="map"
      ref={container}
      style={{ width: "500px", height: "400px" }}
    ></div>
  )
}

export default Map
