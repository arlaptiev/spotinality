const config = {
  BASE_URL: process.env.NODE_ENV === 'production' ? 'https://spotinality.vercel.app' : 'http://0.0.0.0:3000',

  VANA_API_URL: 'https://api.vana.com/api/v0',
  SPOTIFY_API_URL: 'https://api.spotify.com/v1',
  OPENAI_API_URL: 'https://api.openai.com/v1',

  SPOTIFY_CLIENT_ID: '61dfecc1a8534d5cbcf78404cb85f891',
  NEIL_API_KEY: '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',

  TITLE: 'Spotinality',
  DESCRIPTION: 'Find out your true Spotify Personality with AI',
  THEME_COLOR: 'black',
  OG_IMAGE: '',

  GITHUB: 'https://github.com/arlaptiev/spotinality'
};

module.exports = config;
