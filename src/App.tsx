import React from 'react';
import logo from './logo.svg';
import './App.css';
import WindowSizeDisplay from './components/WindowSizeDisplay';
import Collapsible from './components/Collapsible';

function App() {
  return (
    <div className="App">
      <WindowSizeDisplay />
      <hr />
      <Collapsible title="React">
        The library for web and native user interfaces
      </Collapsible>
      <br />
      <Collapsible title="Another one">
        Another instance of the Collapsible component
      </Collapsible>
    </div>
  );
}

export default App;
