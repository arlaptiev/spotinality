import { getSpotiData, spotiData2Labels } from "./spotiData"
import { getStory, getBackgroundPic, requestPersonaPic } from "./promptGen"

export const generatePersona = async () => {

  try {
    // const spotiData = await getSpotiData()
    // const labels = await spotiData2Labels(spotiData)
    // console.log(spotiData)

    // const story = await getStory(labels)
    // const personaPicUrl = await requestPersonaPic(story, labels) // retrieve in PullingGen.js
    // const backgroundPicUrl = await getBackgroundPic(story, labels)

    // const persona = { story, backgroundPicUrl, personaPicUrl }

    // const persona = {
    //   "story": "\n\nI have always been drawn to jazz music ever since I was a young child. The melodic rhythms and soulful sounds of the saxophone, trumpet and drums captivated me like nothing else. I would spend hours listening to my favorite records and learning how to play the piano. I was never the best musician, but I enjoyed every moment of it. As I got older, my love for jazz music only grew stronger and I began to attend live shows whenever I had the chance. The energy and joy that comes with a live jazz performance is something I'll never forget. To this day, jazz music still brings me immense joy and I'm so grateful to have found something that I can connect with so deeply.",
    //   "backgroundPicUrl": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-7CIbgllXDozo6OOIXJ0pPMEi/user-gnwSmn2ZxpNx45m48V6Fyslx/img-jod7LbdUfcvCxzxB1POXBCBC.png?st=2023-01-27T01%3A26%3A29Z&se=2023-01-27T03%3A26%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-26T23%3A31%3A51Z&ske=2023-01-27T23%3A31%3A51Z&sks=b&skv=2021-08-06&sig=rgVM8OIfHKWeiiONuCHDi/oUB7BZG5qI9BWtRymmJ5k%3D",
    //   "personaPicUrl": "https://storage.googleapis.com/data-collective-images/arlaptiev%40gmail.com/exhibits/text-to-image/c88c565c-03ae-475a-8efc-e6a247ba969d.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=vana-app-user%40corsali-production.iam.gserviceaccount.com%2F20230127%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230127T022623Z&X-Goog-Expires=86401&X-Goog-SignedHeaders=host&X-Goog-Signature=d38041ed8dc724224090f50a1a4cad75cd5e78ee3a6b86207afa53ae65b98db21a8607628319fc03a58f4e795bc1b689af19086a745fce77efdbb2a8effb6b35cb033a31fbba15e7980deca1a3ba37d5519e03c345ebb510454410fcac22e55751710e363f26dd115bb9ce2727c1071d8bee106b8fa5e1f310d160cd48897a126eec4a2cf279a5ead61d1a1aae1a6331740fc3439bea31ebc23cb6ee8d792c4478625a34b5cb1d996f3720f30062a5642fcc420a2530de7d74d6a4eeed7d5f02849fb79da6bb8d836d82d6e498fc5b9ee2741e996854a593db4066eeec7a40fa8422cd3a7d72c0513931e52f2c549c880a53ac4a1e8de34f4bf88038c05dcfcf"
    // }

    const persona = {
      "story": "\n\nI was walking down the street, the sun shining on my face and the sound of indie soul music playing in the background. I felt an overwhelming sense of joy and excitement, like I was discovering something new and wonderful. I started to dance, and as I did, I felt the music take over my body and soul. I felt a connection to the music, and I knew that this was something I wanted to explore more of. I continued to dance and listen, and I felt a deep sense of joy that I hadn't felt in a long time. I knew that I had found something special, and I was determined to explore it further.",
      "backgroundPicUrl": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-7CIbgllXDozo6OOIXJ0pPMEi/user-gnwSmn2ZxpNx45m48V6Fyslx/img-ASCvxYSbmh4FMZGfVJAETDPF.png?st=2023-01-27T01%3A37%3A59Z&se=2023-01-27T03%3A37%3A59Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-26T23%3A30%3A59Z&ske=2023-01-27T23%3A30%3A59Z&sks=b&skv=2021-08-06&sig=8I1rnuXf%2Bp%2BmPr4hOEzlmQXh1y79nr7GXwoEdky3tgw%3D",
      "personaPicUrl": "https://storage.googleapis.com/data-collective-images/arlaptiev%40gmail.com/exhibits/text-to-image/a0105512-4f3c-4982-b7cf-6353affbfbe8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=vana-app-user%40corsali-production.iam.gserviceaccount.com%2F20230127%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230127T023752Z&X-Goog-Expires=86401&X-Goog-SignedHeaders=host&X-Goog-Signature=ab6913cf59efdeb62183228e63ffe0effc2234c5c6efbd2108a9dbe317418541bbdb6862170a03c9e7c511aed7b5b97819cbf67e3ff2a4166cf9bb3c25cffde6d1e17a529b07907e337d2c89e0bf205a3485ea6e54cc58adcf19ee5c000007b36fdb152b86907ff0ceb44ca7fee5f57f6370393dc6555939a082c96975f53e0ea856ab5e3d6201830f73b6ed80c1e06914f2abd0d51723918bee6633dea1dcbf599a1075a30fabdd01a583fc6b19cb8ebbbe2e1c35f8e9c2c344611681722f23d2af910ca1e9fb34ae7dbb223a5386c85504f4a5e49ce62d98b58d26c612f642cc82618116878bb9ed4e9c07580af6865369cd5f97ff78f41a27fd3639b0edff"
    }

    return { status: 200, persona: persona }
  } catch (e) {
    return { status: 500, error: e}
  }
};
