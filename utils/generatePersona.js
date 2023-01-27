import { getSpotiData, spotiData2Labels } from "./spotiData"
import { getStory, getBackgroundPic, requestPersonaPic } from "./promptGen"

export const generatePersona = async () => {

  try {
    const spotiData = await getSpotiData()
    const labels = await spotiData2Labels(spotiData)
    console.log(spotiData)

    const story = await getStory(labels)
    const personaPicUrl = await requestPersonaPic(story, labels) // retrieve in PullingGen.js
    const backgroundPicUrl = await getBackgroundPic(story, labels)

    const persona = { story, backgroundPicUrl, personaPicUrl }

    // const persona = {
    //   "story": "\n\nI have always been drawn to jazz music ever since I was a young child. The melodic rhythms and soulful sounds of the saxophone, trumpet and drums captivated me like nothing else. I would spend hours listening to my favorite records and learning how to play the piano. I was never the best musician, but I enjoyed every moment of it. As I got older, my love for jazz music only grew stronger and I began to attend live shows whenever I had the chance. The energy and joy that comes with a live jazz performance is something I'll never forget. To this day, jazz music still brings me immense joy and I'm so grateful to have found something that I can connect with so deeply.",
    //   "backgroundPicUrl": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-7CIbgllXDozo6OOIXJ0pPMEi/user-gnwSmn2ZxpNx45m48V6Fyslx/img-jod7LbdUfcvCxzxB1POXBCBC.png?st=2023-01-27T01%3A26%3A29Z&se=2023-01-27T03%3A26%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-26T23%3A31%3A51Z&ske=2023-01-27T23%3A31%3A51Z&sks=b&skv=2021-08-06&sig=rgVM8OIfHKWeiiONuCHDi/oUB7BZG5qI9BWtRymmJ5k%3D",
    //   "personaPicUrl": "https://storage.googleapis.com/data-collective-images/arlaptiev%40gmail.com/exhibits/text-to-image/c88c565c-03ae-475a-8efc-e6a247ba969d.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=vana-app-user%40corsali-production.iam.gserviceaccount.com%2F20230127%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230127T022623Z&X-Goog-Expires=86401&X-Goog-SignedHeaders=host&X-Goog-Signature=d38041ed8dc724224090f50a1a4cad75cd5e78ee3a6b86207afa53ae65b98db21a8607628319fc03a58f4e795bc1b689af19086a745fce77efdbb2a8effb6b35cb033a31fbba15e7980deca1a3ba37d5519e03c345ebb510454410fcac22e55751710e363f26dd115bb9ce2727c1071d8bee106b8fa5e1f310d160cd48897a126eec4a2cf279a5ead61d1a1aae1a6331740fc3439bea31ebc23cb6ee8d792c4478625a34b5cb1d996f3720f30062a5642fcc420a2530de7d74d6a4eeed7d5f02849fb79da6bb8d836d82d6e498fc5b9ee2741e996854a593db4066eeec7a40fa8422cd3a7d72c0513931e52f2c549c880a53ac4a1e8de34f4bf88038c05dcfcf"
    // }

    return { status: 200, persona: persona }
  } catch (e) {
    return { status: 500, error: e}
  }
};
