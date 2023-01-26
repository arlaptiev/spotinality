import { getSpotiData, spotiData2Labels } from "./spotiData"
import { getStoryPrompt, getStory, getVanaPicPrompt, getVanaPic, getDiffusionPrompt, getDiffusionPic } from "./promptGen"

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const generatePersona = async () => {

  try {

    const spotiData = await getSpotiData()
    const labels = await spotiData2Labels(spotiData)

    const storyPrompt = await getStoryPrompt(labels)
    const story = await getStory(storyPrompt)

    const vanaPrompt = await getVanaPicPrompt(story) // or whatever input is needed
    const vanaPicUrl = await getVanaPic(vanaPrompt)

    const diffusionPrompt = await getDiffusionPrompt(story) // or whatever input is needed
    const diffusionPicUrl = await getDiffusionPic(diffusionPrompt)
    

    return { status: 200, res: { story, vanaPicUrl, diffusionPicUrl } }
  } catch (e) {
    return { status: 500, error: e}
  }
};
