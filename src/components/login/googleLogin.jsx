import React, { useRef } from "react"
import useScript from "../../hooks/useScript"
import styles from "./googleLogin"
//import { postGoogleLogin } from "@api/auth"

const GoogleLogin = () => {
  const googleSignInButton = useRef(null)

  const onGoogleSignIn = async (res) => {
    console.log(res)
    //const result = await postGoogleLogin(res.credential)
    //콜백 함수
  }

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
    })
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      type: "icon",
      shape: "circle",
    })
  })

  return (
    <div
      id="google-login-api"
      className={styles.GoogleBtn}
      ref={googleSignInButton}
    />
  )
}
export default GoogleLogin
