import { useEffect } from "react";
import { generatePersona } from "../../../utils/generatePersona";

export const ProcessingGen = ({ onSetGeneratorState, onSetErrorState }) => {

  useEffect(() => {
    // do the process
    const process = async () => {

      const res = await generatePersona()

      if (res.status === 200) {
        onSetGeneratorState("finished")
      } else {
        onSetErrorState(res.error)
        onSetGeneratorState("error")
      }
    }

    // call the function
    process()
      // make sure to catch any error
      .catch(console.error);
    const lastGeneratedTime = localStorage?.lastGeneratedTime ?? undefined;
    
    if (lastGeneratedTime) {
      onSetGeneratorState("finished")
    }
  }, [])

  return (
    <div className="content container">
      <h1>Getting your persona ready...</h1>
      <section className="w-full space-y-4">
      </section>
    </div>
  );
};
