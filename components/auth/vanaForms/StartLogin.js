export const StartLogin = ({ onSetLoginState }) => {
  const authToken = localStorage?.spotifyAuthToken ?? undefined;
  return (
    <div className="content container">
      <h1>Vana Login</h1>
      <section className="w-full space-y-4">
        <button
          onClick={() => onSetLoginState("emailInput")}
          className="primaryButton w-full"
        >
          Login
        </button>
        <p className="description">
          New to Vana?{" "}
          <a target="_blank" href="https://portrait.vana.com/create">
            Create your Portrait { authToken }
          </a>
        </p>
      </section>
    </div>
  );
};
