import React, { useRef } from 'react'
import useScript from '../../hooks/useScript'
import styles from './googleLogin'
//import { postGoogleLogin } from "@api/auth"

const GoogleLogin = () => {
  const googleSignInButton = useRef(null)

  const onGoogleSignIn = async (googleUser) => {
    handleCredentialResponse(googleUser.credential)
  }

  const handleCredentialResponse = (credential) => {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = decodeJwtResponse(credential)
    console.log(responsePayload)
  }

  function decodeJwtResponse(token) {
    console.log('decode : ', token)
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )
    return JSON.parse(jsonPayload)
  }

  useScript('https://accounts.google.com/gsi/client', () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
    })
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      type: 'icon',
      shape: 'circle',
    })
  })

  return (
    <div
      id='google-login-api'
      className={styles.GoogleBtn}
      ref={googleSignInButton}
    />
  )
}
export default GoogleLogin
