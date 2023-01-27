import { useEffect, useState } from "react";
import { generatePersona } from "../../../utils/generatePersona";

/**
 * This component abstracts the process of interacting with APIs to get persona data
 */

export const ProcessingGen = ({ onSetGeneratorState, onSetErrorState, setGen }) => {

  const [processingState, setProcessingState] = useState('initial') // initial, running


  // do the process
  const process = async () => {
    if (processingState === 'initial') {
      setProcessingState('running') // set the flag to prevent running twice

      const res = await generatePersona()
      console.log(res)

      if (res.status === 200) {
        setGen(res.persona)
        onSetGeneratorState("finished")
      } else {
        onSetErrorState(res.error)
        onSetGeneratorState("error")
      }
    
      setProcessingState('initial') // reset flag
    }
  }

  useEffect(() => {
    // call the function
    process()
      // make sure to catch any error
      .catch(console.error);
  }, [])

  return (
    <div className="content container">
      <h1>Getting your persona ready...</h1>
      <section className="w-full space-y-4">
      </section>
    </div>
  );
};
