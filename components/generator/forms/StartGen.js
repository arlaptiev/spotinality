import config from "../../../config";

export const StartGen = ({ onSetGeneratorState }) => {
  const authToken = localStorage?.spotifyAuthToken ?? undefined;
  return (
    <div className="content container">
      <h1>Ready to generate your Spotify Persona</h1>
      <section className="w-full space-y-4">
        <button
          onClick={() => onSetGeneratorState(processing)}
          className="primaryButton w-full"
        >
          Generate!
        </button>
        <p className="description">
          SpotifyAuthToken: { authToken }
        </p>
      </section>
    </div>
  );
};
