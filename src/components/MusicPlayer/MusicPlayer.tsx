"use client";
import React, { useEffect, useRef, useState } from "react";
import { ImVolumeMute, ImVolumeMute2 } from "react-icons/im";

const MusicPlayer = () => {
  const audioRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState(false);

  const playAudio = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.05;
  };

  const muteAudio = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("click", playAudio);
    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/bg-music.mp3" loop />
      <button onClick={muteAudio}>
        {isMuted ? <ImVolumeMute2 size={20} /> : <ImVolumeMute size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
