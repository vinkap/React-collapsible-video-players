import React, { ReactNode, useRef, useState } from 'react'
import './VideoPlayer.css';

type Props = {
  videoUrl: string,
  indicator?: (isPlaying: boolean) => ReactNode
}

export default function VideoPlayer({ videoUrl, indicator }: Props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    setIsVideoPlaying(!isVideoPlaying);

    isVideoPlaying ?
      videoPlayerRef.current?.pause() :
      videoPlayerRef.current?.play();
  }

  return (
    <>
      {indicator && indicator(isVideoPlaying)}
      <div className='video'>
        <video
          ref={videoPlayerRef}
          controls={false}
          loop={true}
          onClick={togglePlay}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}
