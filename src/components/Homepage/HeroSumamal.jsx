import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
const HeroSumamal = () => {
  const videoref = useRef();
  const [IsVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(videoref.current);
  }, []);
  return (
    <div ref={videoref} className=" w-full h-full bg-white">
      <video className="" muted loop={true} autoPlay={IsVisible}>
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
