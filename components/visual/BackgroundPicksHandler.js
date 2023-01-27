import { useState, useEffect } from 'react';

export const BackgroundPicsHandler = ({ backgroundPicsUrls }) => {
  const [currentUrl, setCurrentUrl] = useState(backgroundPicsUrls[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId = undefined

    if (backgroundPicsUrls) {
      intervalId = setInterval(() => {
        console.log('CURR_URL', currentUrl)
        setCurrentIndex((currentIndex + 1) % backgroundPicsUrls.length);
        setCurrentUrl(backgroundPicsUrls[currentIndex]);
      }, 5000);
    }

    return () => clearInterval(intervalId);
  }, [backgroundPicsUrls]);


  return (
    <div className="relative h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out"
        style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        src={currentUrl}
        alt="background"
      />
    </div>
  );
};






