import React from 'react';
import './App.css';
import WindowSizeDisplay from './components/WindowSizeDisplay/WindowSizeDisplay';
import Collapsible from './components/Collapsible/Collapsible';
import DeviceType from './components/DeviceType/DeviceType';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  return (
    <div className="App">
      <WindowSizeDisplay />
      <hr />
      <DeviceType />
      <hr />
      <Collapsible title="React">
        The library for web and native user interfaces
      </Collapsible>
      <br />
      <Collapsible title="Another One">
        Another instance of the Collapsible component
      </Collapsible>
      <br />
      <Collapsible title="Yet Another One">
        Here's yet another instance of the Collapsible component
      </Collapsible>
      <br />

      <Collapsible title="Big Bunny">
        <VideoPlayer
          videoUrl='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        />
      </Collapsible>
      <br />
      <Collapsible title="Big Bunny 2">
        <VideoPlayer
          videoUrl='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
          indicator={(isPlaying) => <span className='indicator'>{isPlaying ? "🏃" : "✋" }</span>}
        />
      </Collapsible>
      <Collapsible title="Big Bunny 3">
        <VideoPlayer
          videoUrl='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
          indicator={(isPlaying) => <>
            {isPlaying ?
              <span style={{ color: 'green' }}>Playing</span> :
              <span style={{ color: 'red' }}>Paused</span>
            }
          </>}
        />
      </Collapsible>
    </div>
  );
}

export default App;
