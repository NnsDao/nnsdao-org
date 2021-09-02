

import React from 'react'
import VideoPlayer from "react-background-video-player"

const BgVideo: React.FC = () => {
  return (
        <VideoPlayer
        className="w-screen h-full"
        src={
        "/imgs/background.mp4"
        }
        autoPlay={true}
        muted={true}
        />
  );
};

export default BgVideo
