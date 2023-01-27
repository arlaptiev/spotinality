import { spotifyAuthUrl } from "../../../apis/spotifyApi";

export const StartLogin = () => {
  return (
    <div className="content container">
      <h1>Spotify Login</h1>
      <section className="w-full space-y-4 pt-4">
        <button
          onClick={() => location.href = spotifyAuthUrl()}
          className="primaryButton w-full"
        >
          Login
        </button>
      </section>
    </div>
  );
};
