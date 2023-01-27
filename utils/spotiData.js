import { spotifyApiGet } from '../apis/spotifyApi'

export const getSpotiData = async () => {
  const data = await spotifyApiGet('me')
  const data_3 = await spotifyApiGet('me/top/tracks?limit=1&time_range=short_term')

  return data_3
}

export const spotiData2Labels = async (data_3) => {
  console.log(data_3)
  // return {
  //   genre: data_3.items[0].genres[0]
  // }
  return {
    genre: 'jazz'
  }
}