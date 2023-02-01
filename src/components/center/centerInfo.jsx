import React from "react"
import styles from "./centerInfo.module.css"
import SimpleImageSlider from "react-simple-image-slider"
import useWindowDimensions from "../common/window"
const CenterInfo = () => {
  const data = {
    name: "남스짐 옥길점",
    contact: "0507-1427-3375",
    address: "경기 부천시 옥길로 124 퀸즈파크 C동 8층 남스짐",
    price: "7000(운동복 포함)",
    time: "09:00 ~ 24:00",
    rate: "4.3",
  }

  const { width } = useWindowDimensions()

  const images = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80",
    },
  ]
  return (
    <section className={styles.container}>
      <SimpleImageSlider
        width={width > 768 ? "45%" : "100%"}
        height={width > 768 ? 500 : 350}
        images={images}
        showBullets={true}
        showNavs={true}
        className={styles.images}
      />
      <div className={styles.infoContainer}>
        <div>
          <h3>
            {data.name} (⭐{data.rate})
          </h3>
        </div>
        <div>
          <li className={styles.list}>
            <dd className={styles.sort}>가격</dd>
            <dd className={styles.item}>{data.price}</dd>
          </li>
          <li className={styles.list}>
            <dd className={styles.sort}>장소</dd>
            <dd className={styles.item}>{data.address}</dd>
          </li>
          <li className={styles.list}>
            <dd className={styles.sort}>연락망</dd>
            <dd className={styles.item}>{data.contact}</dd>
          </li>
          <li className={styles.list}>
            <dd className={styles.sort}>운영시간</dd>
            <dd className={styles.item}>{data.time}</dd>
          </li>
        </div>
        <button>예약하기</button>
      </div>
    </section>
  )
}

export default CenterInfo
