import { useEffect } from "react";
import { generatePersona } from "../../../utils/generatePersona";

/**
 * This component abstracts the process of interacting with APIs to get persona data
 */

export const ProcessingGen = ({ onSetGeneratorState, onSetErrorState, setGen }) => {


  // do the process
  const process = async () => {

    const res = await generatePersona()
    console.log(res)

    if (res.status === 200) {
      setGen(res.persona)
      onSetGeneratorState("finished")
    } else {
      onSetErrorState(res.error)
      onSetGeneratorState("error")
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
