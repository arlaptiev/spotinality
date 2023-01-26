import { spotifyApiGet } from '../apis/spotifyApi'

export const getSpotiData = async () => {
  // TODO
  const data = await spotifyApiGet('me')
  console.log(data.display_name)
  //console.log(data.country)
  //const data_2 = await spotifyApiGet('me/top/tracks?limit=1&time_range="short_term"')
  //console.log(data_2.items[0].album) 
  const data_3 = await spotifyApiGet('me/top/tracks?limit=1&time_range=short_term')
  console.log(data_3.items[0].genres[0])
}

export const spotiData2Labels = async () => {
  // TODO
  chatgpt_input_prompt = "Give me a sentence that includes 5 PG13 artistic adjectives \
          that describe {data_3.items[0].genres[0]} music. Append the list to the phrase \
          me as a Van Gogh painting looking."
}