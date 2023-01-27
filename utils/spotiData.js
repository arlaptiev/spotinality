import { spotifyApiGet } from '../apis/spotifyApi'

export const getSpotiData = async () => {
  const data = await spotifyApiGet('me')
  const data_2 = await spotifyApiGet('me/top/tracks?limit=1')
  const data_3 = await spotifyApiGet('me/top/tracks?limit=1&time_range=short_term')
  const data_4 = await spotifyApiGet('me/player/recently-played?limit=20')
  console.log('Hello')
  console.log(data_4.items[0].track.album.name)
  console.log('Hello') 
  return {data,data_2,data_3,data_4}
}

export const spotiData2Labels = async (data) => {
  // console.log(data_3)
  // return {
  //   genre: data_3.items[0].genres[0]
  // }
  return {
    //usr_name: data.data.display_name,
    genre: data.data_3.items[0].genres[0],
    //total_artists: data.data_2.total,
    //rec_artist: data.data_4.items[0].track.album.artists[0].name,
    rec_name_of_tr: data.data_4.items[0].track.album.name,
    rec_names_of_tr: [data.data_4.items[0].track.album.name,
    data.data_4.items[1].track.album.name,data.data_4.items[2].track.album.name,
    data.data_4.items[3].track.album.name,data.data_4.items[4].track.album.name]

  }
}