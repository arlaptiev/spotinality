import { spotifyApiGet } from '../apis/spotifyApi'

export const getSpotiData = async () => {
  // TODO
  const data = await spotifyApiGet('me')
  console.log(data)
}

export const spotiData2Labels = async () => {
  // TODO
}