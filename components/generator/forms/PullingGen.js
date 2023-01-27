import { useEffect, useState } from "react";
import { vanaApiPost, vanaApiGet } from "apis/vanaApi";

/**
 * This component abstracts the process of pulling all the already generated user's persona data
 */

export const PullingGen = ({ onSetGeneratorState, onSetErrorState, setUser, user }) => {

  const pullGensWithTimeout = async () => {
    const pullGens = async () => {
      const vanaAuthToken = localStorage?.vanaAuthToken ?? undefined;
      if (vanaAuthToken) {
        const [personaPicUrlPromise] = [
          vanaApiGet("account/exhibits/spotinality"),
        ];

        const [personaPicUrlResponse] =
          await Promise.all([
            personaPicUrlPromise
          ]);

        const newUser = {
          personaPicUrl: personaPicUrlResponse?.urls[0] ?? [],
        };

        setUser({...user, ...newUser});
      }
    };
    await pullGens();
    setTimeout(pullGensWithTimeout, 60000);
  };

  useEffect(() => {
    // Make sure everything for visualizing persona is ready
    // TODO fix falling into multiple loops after user state changes
    const conditions =
      typeof user.story !== 'undefined' &&
      typeof user.personaPicUrl !== 'undefined' &&
      typeof user.backgroundPicUrl !== 'undefined'

    if(conditions === true) {
      // save user for future use
      localStorage.setItem("user", user);
      localStorage.setItem("lastGeneratedTime", Date.now());
      onSetGeneratorState("finished");
    }

    // pull new generations
    pullGensWithTimeout()

    return () => clearTimeout(pullGensWithTimeout);
  }, [user])

  return (
    <div className="content container">
      <h1>Pulling...</h1>
      <section className="w-full space-y-4">
      </section>
    </div>
  );
};
