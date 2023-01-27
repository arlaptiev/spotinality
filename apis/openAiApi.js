import config from "../config";

/**
 * Helper function to make Vana API calls
 */
const openAiApiFetch = async (path, options = {}) => {
  const authToken = config.NEIL_API_KEY
  if (authToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${authToken}`,
    };
  }

  const response = await fetch(`${config.OPENAI_API_URL}/${path}`, options);
  const data = await response.json();

  if (response.ok && response.status === 200) {
    return data;
  } else {
    console.error(`Error calling ${path}`, data.message);
  }
};

/**
 * Vana API POST request
 */
const openAiApiPost = async (path, body) =>
  openAiApiFetch(path, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

/**
 * Vana API GET request
 */
const openAiApiGet = async (path) => openAiApiFetch(path, {});

export { openAiApiGet, openAiApiPost };
