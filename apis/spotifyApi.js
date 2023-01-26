import config from "../config";
import queryString from 'query-string'

/**
 * Helper function to make Spotify API calls
 */
const spotifyApiFetch = async (path, options = {}) => {
  const authToken = localStorage?.spotifyAuthToken ?? undefined;
  if (authToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${authToken}`,
    };
  }

  const response = await fetch(`${config.SPOTIFY_API_URL}/${path}`, options);
  const data = await response.json();

  if (response.ok && response.status === 200) {
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
  const scope = 'user-read-email user-library-read user-top-read user-read-recently-played';

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
 * Spotify API POST request
 */
const spotifyApiPost = async (path, body) =>
  spotifyApiFetch(path, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

/**
 * Spotify API GET request
 */
// TODO DO THE PAGE ITERATION
const spotifyApiGet = async (path) => spotifyApiFetch(path, {});

export { spotifyApiGet, spotifyApiPost, spotifyAuthUrl };
