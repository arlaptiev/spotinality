import { useState, useEffect } from "react";
import Head from "next/head";
import { GithubIcon } from "components/icons/GithubIcon";
import { vanaApiPost } from "apis/vanaApi";
import { VanaLoginHandler } from "components/auth/VanaLoginHandler";
import { SpotifyLoginHandler } from "components/auth/SpotifyLoginHandler";
import { GeneratorHandler } from "components/generator/GeneratorHandler";

export default function Home() {
  // User State
  const [vanaUser, setVanaUser] = useState({
    balance: 0,
    exhibits: [],
    textToImage: [],
  });

  const [gen, setGen] = useState({
    story: '',
    personaPicUrl: '',
    backgroundPicUrl: '',
  });

  return (
    <>
      <Head>
        <title>Spotinality</title>
        <meta name="description" content="Find out your true Spotify Personality with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <a
          href="https://github.com/vana-com/vana-mit-hackathon"
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
                <div className="content container">
                  <div className="space-y-4">
                    <div>PERSONA_PIC_URL: <br/><img src={gen?.personaPicUrl} key={0} className="w-full" /></div>
                    <div>STORY: {gen?.story ?? 0}</div>
                    <div>BACKGROUND_PIC_URL: <img src={gen?.backgroundPicUrl} key={0} className="w-full" /></div>
                  </div>
                </div>
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
