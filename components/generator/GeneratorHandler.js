import { useState, useEffect } from "react";
import { LoginEmailForm } from "components/auth/vanaForms/LoginEmailForm";
import { LoginCodeForm } from "components/auth/vanaForms/LoginCodeForm";
import { StartLogin } from "components/auth/spotifyForms/StartLogin";
import { useRouter } from 'next/router'
import * as jose from "jose";
import { vanaApiPost, vanaApiGet } from "apis/vanaApi";
import queryString from 'query-string'

/**
 * This component abstracts Spotify Persona generation
 */

export const GeneratorHandler = ({ children }) => {  
  // set the state, depending on whether the Auth token is passed in or not
  const [generatorState, setGeneratorState] = useState("initial"); // initial, processing, finished

  useEffect(() => {
    // try to access the authToken, passed as a fragment identifier from the url
    const lastGeneratedTime = localStorage?.lastGeneratedTime ?? undefined;
    
    if (lastGeneratedTime) {
      setGeneratorState("finished")
    }
  }, [])

  return (
    <>
      {generatorState === "initial" && (
        <StartGen onSetGeneratorState={setGeneratorState} />
      )}

      {generatorState === "loggedIn" && children}
    </>
  );
};
