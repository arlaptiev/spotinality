import { spotifyApiGet } from '../apis/spotifyApi'

export const getSpotiData = async () => {
  const data = await spotifyApiGet('me')
  const data_2 = await spotifyApiGet('me/top/tracks?limit=20')
  const data_3 = await spotifyApiGet('me/top/artists?limit=20&time_range=short_term')
  const data_4 = await spotifyApiGet('me/player/recently-played?limit=20')
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
    rec_names_of_tr: [
      data.data_4.items[0].track.album.name,
      data.data_4.items[1].track.album.name,data.data_4.items[2].track.album.name,
      data.data_4.items[3].track.album.name,data.data_4.items[4].track.album.name,
      data.data_4.items[5].track.album.name,
      data.data_4.items[6].track.album.name,data.data_4.items[7].track.album.name,
      data.data_4.items[8].track.album.name,data.data_4.items[9].track.album.name,
      data.data_4.items[10].track.album.name,data.data_4.items[11].track.album.name,
      data.data_4.items[12].track.album.name,data.data_4.items[13].track.album.name
    ]

  }
}