import config from "../config";
import queryString from 'query-string'

/**
 * Helper function to make Vana API calls
 */
const vanaApiFetch = async (path, options = {}) => {
  const authToken = localStorage?.authToken ?? undefined;
  if (authToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${authToken}`,
    };
  }

  const response = await fetch(`${config.VANA_API_URL}/${path}`, options);
  const data = await response.json();

  if (response.ok && data.success === true) {
    return data;
  } else {
    console.error(`Error calling ${path}`, data.message);
  }
};

/**
 * Spotify Authenticate helper function to create URL for authentication
 */
const spotifyAuthUrl = () => {
  // Set up the scope for Spotify application
  const scope = 'playlist-read-private user-read-email user-library-read';

  // Set up the auth token endpoint and the headers for the request
  const authUrl = 'https://accounts.spotify.com/authorize';

  // Set up the auth params
  const authParams = {
  client_id: config.SPOTIFY_CLIENT_ID,
  response_type: 'token',
  redirect_uri: config.URL,
  scope: scope
  };

  // Redirect the user to the Spotify authorization page
  const url = authUrl + '?' + queryString.stringify(authParams);
  return url
 }

/**
 * Vana API POST request
 */
const vanaApiPost = async (path, body) =>
  vanaApiFetch(path, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

/**
 * Vana API GET request
 */
const vanaApiGet = async (path) => vanaApiFetch(path, {});

export { vanaApiGet, vanaApiPost, spotifyAuthUrl };
