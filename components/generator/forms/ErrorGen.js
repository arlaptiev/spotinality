import config from "../../../config";

export const ErrorGen = ({ error, onSetGeneratorState }) => {
  const authToken = localStorage?.spotifyAuthToken ?? undefined;
  return (
    <div className="content container">
      <h1>Something went wrong in the process :c</h1>
      <section className="w-full space-y-4 pt-4">
        <button
          onClick={() => onSetGeneratorState("processing")}
          className="primaryButton w-full"
        >
          Re-generate!
        </button>
        <p className="description">
          Error: {error.message}
        </p>
      </section>
    </div>
  );
};
