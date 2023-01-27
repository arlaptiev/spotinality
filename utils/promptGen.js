import { openAiApiPost  } from "apis/openAiApi"
import { vanaApiPost  } from "apis/vanaApi"

/**
 * Generate Context / Context = Story
 */

 function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const descriptorsStr = 'atmosphere,concept art,ornate,wooden,digital,volumetric,sunbeams,ominous,cinematic,steampunk,UHD,glow,spraypaint,reflections,dramatic,city,holographic,neon,space,seafloor,humanoid,3d,flare,instagram,roman'
const descriptors = descriptorsStr.split(',')

//  export const getContext = async (labels) => {
//   const prompt = `Write a little story about my love for ${labels.genre} music.`
//   console.log('CONTEXT PROMPT', prompt)
//   let context = 'TO GEN'
//   const chatres = await openAiApiPost('engines/text-davinci-003/completions', {
//     prompt: prompt,
//     temperature: 0.5,
//     max_tokens: 2048
//   })
//   context = chatres.choices[0].text
//   console.log('CONTEXT', context)
//   return context
// }

/**
 * Story Generation
 */

export const getStory = async (labels) => {
  const prompt = `Write a very short story about me and my joy for ${labels.genre} music.`
  console.log('STORY PROMPT', prompt)
  let story = 'TO GEN'
  const chatres = await openAiApiPost('engines/text-davinci-003/completions', {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 2048
  })
  story = chatres.choices[0].text
  console.log('STORY', story)
  return story
}

/**
 * Vana Picture Generation
 */

export const requestPersonaPic = async (story, labels) => {
  // Generate context prompt
  const contextPrompt = `Here is a story: '${story}.' Here is a list of three famous artists: Vincent Van Gogh, Da Vinci, and Pablo Picasso. First, randomly pick one of the painters. Then, take this story and write a concise one sentence prompt that gives the instructions to paint me into a painting created by one of the painters you randomly selected. The painting should depict descriptors from the short story that evoke imagery. Make the prompt shorter.`
  console.log('PERSONAL PIC CONTEXT PROMPT', contextPrompt)
  let prompt = 'TO GEN'
  const chatres = await openAiApiPost('engines/text-davinci-003/completions', {
    prompt: contextPrompt,
    temperature: 0.5,
    max_tokens: 2048
  })
  prompt = `${choose(descriptors)} ${choose(descriptors)} ${chatres.choices[0].text}`

  console.log('PERSONAL PIC PROMPT', prompt.replace(/\bme\b/i, "{target_token}").replace("\n\n", ""))

  // Request persona pic
  let res = null
  while (!res) {
    console.log('TRYING VANA')
    res = await vanaApiPost(`images/generations`, {
      prompt: prompt.replace(/\bme\b/i, "{target_token}").replace("\n\n", ""), // Replace the word "me" with "{target_token}" in the prompt to include yourself in the picture
      exhibit: "spotinality", // How your images are grouped in your gallery. For this demo, all images will be grouped in the `text-to-image` exhibit
      n: 1,
      seed: -1, // The inference seed: A non-negative integer fixes inference so inference on the same (model, prompt) produces the same output
    });
  }
  console.log(res.data[0])
  return res.data[0].url
}

/**
 * Stable Diffusion Background Generation
 */

export const getBackgroundPic = async (story, labels) => {
  // Generate prompt
  // const contextPrompt = `Create an artistic background that has ${labels.genre} vibes on 4k`
  // console.log('BACKGROUND PIC CONTEXT PROMPT', contextPrompt)
  // let prompt = 'TO GEN'
  // const chatres = await openAiApiPost('engines/text-davinci-003/completions', {
  //   prompt: contextPrompt,
  //   temperature: 0.5,
  //   max_tokens: 2048
  // })
  prompt = `Create an artistic background that has ${labels.genre} vibes on 4k`

  console.log('BACKGROUND PIC PROMPT')

  let backgroundPicUrl = 'TO GEN'
  const dalleres = await openAiApiPost('images/generations', {
    prompt: prompt,
    n: 1,
    size: "1024x1024"
  })
  backgroundPicUrl = dalleres.data[0].url

  // TODO
  return backgroundPicUrl
}
