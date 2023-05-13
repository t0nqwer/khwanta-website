import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
const HeroSumamal = () => {
  const videoref = useRef();
  const [IsVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsVisible(entry.isIntersecting);
    });
    observer.observe(videoref.current);
  }, []);

  useEffect(() => {
    const vid = document.getElementById("video");
    if (IsVisible) vid.play();
    if (!IsVisible) vid.pause();
  }, [IsVisible]);
  return (
    <div ref={videoref} className=" w-full h-full bg-white">
      <video id="video" className="" muted loop={true}>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/khwantadashboard.appspot.com/o/final.mov?alt=media&token=dbf4b9b5-936c-45a6-ab64-e6a700d3e349"
          className="w-full  bg-orange-500"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HeroSumamal;
