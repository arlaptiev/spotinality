import config from "../../../config";

export const StartGen = ({ onSetGeneratorState }) => {
  return (
    <div className="content container">
      <h1>Ready to generate your Spotify Persona</h1>
      <section className="w-full space-y-4">
        <button
          onClick={() => onSetGeneratorState()}
          className="primaryButton w-full"
        >
          Generate!
        </button>
      </section>
    </div>
  );
};
