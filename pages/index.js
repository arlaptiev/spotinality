import config from "../config";
import { useState, useEffect } from "react";
import Head from "next/head";
import { GithubIcon } from "components/icons/GithubIcon";
import { VanaLoginHandler } from "components/auth/VanaLoginHandler";
import { SpotifyLoginHandler } from "components/auth/SpotifyLoginHandler";
import { GeneratorHandler } from "components/generator/GeneratorHandler";
import { BackgroundPicksHandler } from "components/visual/BackgroundPicksHandler";

export default function Home() {
  // User State
  const [vanaUser, setVanaUser] = useState({
    balance: 0,
    exhibits: [],
    textToImage: [],
  });

  const [gen, setGen] = useState(null);

  const [personaVisible, setPersonaVisible] = useState(false)

  useEffect(() => {
    if (gen) {
      setPersonaVisible(true)
      console.log("PERSONA VIS")
    }
    return () => setPersonaVisible(false)
  }, [gen]);


  console.log('GEN', gen)

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{config.TITLE}</title>
        <meta name="title" content={config.TITLE} />
        <meta name="description" content="Find out your true Spotify Personality with AI" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={config.THEME_COLOR} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={config.BASE_URL} />
        <meta property="og:title" content={config.TITLE} />
        <meta property="og:description" content={config.DESCRIPTION} />
        <meta property="og:image" content={config.OG_IMG} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={config.BASE_URL} />
        <meta property="twitter:title" content={config.TITLE} />
        <meta property="twitter:description" content={config.description} />
        <meta property="twitter:image" content={config.OG_IMG} />
      </Head>
      <header className="header">
        <a
          href={config.GITHUB}
          target="_blank"
        >
          <GithubIcon />
        </a>
      </header>
      <main className="main">
        <SpotifyLoginHandler>
          <VanaLoginHandler setUser={setVanaUser} user={vanaUser}>
            <GeneratorHandler setGen={setGen}>
              {gen?.personaPicUrl && (

                <>
                <div className={`background-container opacity-0 transition-opacity duration-500 ease-in-out ${personaVisible ? 'opacity-100' : ''}`}>
                  <img src="https://assets.website-files.com/63a0bd4589a5b621b9a48596/63a0be892afd7e154b47692d_linur.svg" loading="lazy" alt="" class="image-background" />
                </div>

                <div className={`marquee text-lg absolute -top-2 w-full opacity-0 transition-opacity duration-500 ease-in-out ${personaVisible ? 'opacity-100' : ''}`}>
                  <div className="marquee__inner">
                    <p className="marquee__line">{gen?.artists}</p>
                    <p className="marquee__line">{gen?.artists}</p>
                  </div>
                </div>

                {/* <BackgroundPicksHandler backgroundPicUrls={gen?.backgroundPicUrls}/> */}

                <div className="content max-w-screen-2xl lg:max-w-screen-xl">
                  <div className="mx-auto max-w-screen-section px-4 sm:px-8 lg:px-12 lg:text-left">
                    <div className="mb-20 grid-cols-1 items-end sm:mb-28 sm:px-20 md:grid-cols-12 md:gap-6 lg:grid lg:px-0">

                      <div className="col-span-5 col-start-1 text-center lg:text-left">

                          <div className={`transform -translate-x-full transition-transform duration-700 ease-in-out ${personaVisible ? 'translate-x-0' : ''}`}>
                            <h2 className="xs:text-6xl font-bold text-5xl tracking-[-0.02em] sm:text-7xl xl:text-8xl">{gen?.title.slice(0, gen?.title.lastIndexOf(" "))}</h2>
                            <h2 className="xs:text-6xl font-high text-5xl tracking-[0.01em] sm:text-7xl xl:text-8xl">{gen?.title.slice(gen?.title.lastIndexOf(" ") + 1)}</h2>
                          </div>

                        <div className={`transform -translate-x-full transition-transform duration-1000 ease-in-out ${personaVisible ? 'translate-x-0' : ''}`}>
                          <div className="mt-10 text-base font-[350] sm:mt-12 sm:text-lg">
                            <p>{gen?.story ?? 0}</p>
                          </div>

                          <div className="pt-12">
                            <button
                              onClick={async (event) => {
                                event.preventDefault();
                                onSetGeneratorState("processing")
                              }}
                              className="primaryButton w-full"
                            >
                              Share
                            </button>
                          </div>
                        </div>

                      </div>

                      <div className="relative col-span-5 col-start-8 mt-10 sm:mt-14 lg:mt-0 self-center">
                        <img src={gen?.personaPicUrl} key={0} className={`w-full opacity-0 transition-opacity duration-1000 ease-in-out ${personaVisible ? 'opacity-100 translate-y-0' : ''}`} />
                        <img src={gen?.backgroundPicUrl} key={1} className={`absolute w-full -z-10 top-7 left-7 opacity-0 transition-opacity duration-1000 ease-in-out ${personaVisible ? 'opacity-100 translate-y-0' : ''}`} />
                      </div>

                    </div>
                  </div>
                </div>

                {/* <div class="flex bg-neutral-50 pt-[8.5rem] sm:pt-[11rem]">
                  <div class="mx-auto max-w-screen-section px-4 sm:px-8 lg:px-12 lg:text-left">
                    <div class="mb-20 grid-cols-1 items-end sm:mb-28 sm:px-20 md:grid-cols-12 md:gap-6 lg:grid lg:px-0">
                      <div class="col-span-5 col-start-1 text-center lg:text-left">
                        <h1 class="xs:text-6xl font-ABCWhyteEdu-Bold text-5xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-7xl xl:text-8xl">Product</h1>
                        <h1 class="xs:text-6xl font-ABCWhyteEdu-Bold text-5xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-7xl md:font-ABCWhyteInktrapEdu-BoldItalic xl:text-8xl">designer</h1>
                        <div class="mt-10 font-ABCWhyteEdu-Book text-base font-[350] text-neutral-700 sm:mt-12 sm:text-lg">
                          I'm Bonnie, a product designer with a knack for turning problems and opportunities into user-driven strategic solutions with delightful and intuitive interface design.
                        </div>
                        <div class="col-span-5 mt-10 rounded-full border-2 border-neutral-900 sm:mt-12">
                          <div class="flex items-center justify-between p-3">
                            <div class="flex items-center">
                              <p class="leading[1.725rem] pl-20 font-ABCWhyteEdu-Medium text-xl font-medium text-neutral-900 ssm:text-[1.5rem]">1:45 pm</p>
                            </div>
                            <div class="block items-center sxs:flex sm:flex">
                              <div class="items-center">
                                <div class="hidden text-neutral-900 sxs:flex">
                                  💻
                                  <p class="ssm:te xt-xl pl-2 font-ABCWhyteEdu-Book text-lg font-[350] text-neutral-900">Working</p>
                                </div>
                              </div>
                            </div><a class="" href="/about"><button class="text-md group flex cursor-pointer flex-row items-center justify-center gap-4 whitespace-nowrap font-medium opacity-100 disabled:pointer-events-none disabled:select-none font-ABCWhyteEdu-Medium text-base font-medium text-neutral-900 disabled:opacity-50 sm:text-lg" aria-label="Button" type="button">
                            <div class="flex items-center justify-center rounded-full bg-secondary-500 py-[0.625rem] px-[0.625rem] text-neutral-900 shadow-none transition-shadow group-hover:translate-y-[-0.125rem] group-active:bg-secondary-700 h-16 w-16 group-hover:shadow-smButton">
                              <svg fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                              <path d="M17.044 15c.282-.615.554-1.154.817-1.615.282-.462.554-.846.817-1.154H2.25v-1.212h16.428a11.243 11.243 0 0 1-.817-1.182 23.57 23.57 0 0 1-.817-1.587h.986c1.184 1.404 2.424 2.442 3.72 3.115v.52c-1.296.654-2.536 1.692-3.72 3.115z" fill="currentColor"></path></svg>
                            </div></button></a>
                          </div>
                        </div>
                      </div>
                      <div class="relative col-span-5 col-start-8 mt-10 sm:mt-14 lg:mt-0">
                        <div class="rounded-t-[20.625rem] border-2 shadow-2xl transition-shadow">
                           <img src={gen?.personaPicUrl} key={0} width="1160" height="1160" class="rounded-t-[20.625rem]" style="color: transparent; width: 100%; height: auto;" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="content container">
                  <div className="space-y-4">
                    <div>PERSONA_PIC_URL: <br/><img src={gen?.personaPicUrl} key={0} className="w-full" /></div>
                    <div>STORY: {gen?.story ?? 0}</div>
                    <div>BACKGROUND_PIC_URL: <img src={gen?.backgroundPicUrl} key={0} className="w-full" /></div>
                  </div>
                </div> */}
                </>
              )}

              {/* User doesn't have a trained model*/}
              {typeof gen?.personaPicUrl === 'undefined' && (
                <p>
                  Generation failed. Try again by reloading page.
                </p>
              )}
            </GeneratorHandler>
          </VanaLoginHandler>
        </SpotifyLoginHandler>
      </main>
    </>
  );
}
