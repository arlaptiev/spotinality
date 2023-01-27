import { getSpotiData, spotiData2Labels } from "./spotiData"
import { getStory, getBackgroundPic, requestPersonaPic } from "./promptGen"
import { vanaApiPost } from "apis/vanaApi";

export const generatePersona = async () => {

  try {
    const spotiData = await getSpotiData()
    const labels = await spotiData2Labels(spotiData)

    const story = await getStory(labels)
    const personaPicUrl = await requestPersonaPic(story, labels) // retrieve in PullingGen.js
    const backgroundPicUrl = await getBackgroundPic(story, labels)

    const persona = { story, backgroundPicUrl, personaPicUrl }

    return { status: 200, persona: persona }
  } catch (e) {
    return { status: 500, error: e}
  }
};
