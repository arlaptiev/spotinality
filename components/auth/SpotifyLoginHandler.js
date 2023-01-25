import { useState, useEffect } from "react";
import { LoginEmailForm } from "components/auth/vanaForms/LoginEmailForm";
import { LoginCodeForm } from "components/auth/vanaForms/LoginCodeForm";
import { StartLogin } from "components/auth/spotifyForms/StartLogin";
import { useRouter } from 'next/router'
import * as jose from "jose";
import { vanaApiPost, vanaApiGet } from "apis/vanaApi";
import queryString from 'query-string'

/**
 * This component abstracts login. Feel free to take a look but you can just ignore it in this
 * hackathon
 */
export const SpotifyLoginHandler = ({ children }) => {  
  // set the state, depending on whether the Auth token is passed in or not
  const [loginState, setLoginState] = useState("initial"); // initial, loggedIn

  useEffect(() => {
    // try to access the authToken, passed as a fragment identifier from the url
    const fragmentId = window.location.hash
    
    if (fragmentId) {
      if (fragmentId.includes("#access_token=")) {
        const queryObj = queryString.parse(fragmentId)
        setLoginState("loggedIn")
        localStorage.setItem("spotifyAuthToken", queryObj.access_token);
      }
    }
  }, [])

  return (
    <>
      {loginState === "initial" && (
        <StartLogin />
      )}

      {loginState === "loggedIn" && children}
    </>
  );
};
