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
