import { useState, useEffect } from "react";
import { StartGen } from "components/generator/forms/StartGen";
import { ProcessingGen } from "components/generator/forms/ProcessingGen";
import { ErrorGen } from "components/generator/forms/ErrorGen";

/**
 * This component abstracts Spotify Persona generation
 */

export const GeneratorHandler = ({ children }) => {  
  // set the state, depending on whether the Auth token is passed in or not
  const [generatorState, setGeneratorState] = useState("initial"); // initial, processing, finished
  const [errorState, setErrorState] = useState(null); // initial, processing, finished

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

      {generatorState === "processing" && (
        <ProcessingGen onSetGeneratorState={setGeneratorState} onSetErrorState={setErrorState} />
      )}

      {generatorState === "error" && (
        <ErrorGen error={errorState} onSetGeneratorState={setGeneratorState} />
      )}

      {generatorState === "finished" && children}
    </>
  );
};
