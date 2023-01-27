import { spotifyApiGet } from '../apis/spotifyApi'

export const getSpotiData = async () => {
  const data = await spotifyApiGet('me')
  const data_2 = await spotifyApiGet('me/top/tracks?limit=1')
  const data_3 = await spotifyApiGet('me/top/tracks?limit=1&time_range=short_term')
  const data_4 = await spotifyApiGet('me/player/recently-played?limit=1')
  //  console.log('Hello')
  //  console.log(data_2.total)
  //  console.log('Hello') 
  return data,data_2,data_3,data_4
}

export const spotiData2Labels = async (data,data_2,data_3,data_4) => {
  // console.log(data_3)
  // return {
  //   genre: data_3.items[0].genres[0]
  // }
  return {
    usr_name: data.display_name,
    genre: data_3.items[0].genres[0],
    total_artists: data_2.total,
    rec_artist: data_4.items[0].track.album.artists[0].name,
    rec_name_of_tr: data_4.items[0].track.album.name
  }
}