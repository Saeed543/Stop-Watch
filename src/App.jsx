import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css'

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
        setElapsedMs((prevElapsedMs) => (prevElapsedMs + 1) % 10);
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setElapsedMs(0);
  };

  const formatTime = (time, ms) => {
    const seconds = Math.floor(time / 10);
    const minutes = Math.floor(seconds / 60);

    return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Stop Watch in React Js ⌚</h2>
      <p><strong>Try out for yourself. Add more features to make it yours truly. Enjoy ✌</strong></p>


      <p id='digital'>{formatTime(elapsedTime, elapsedMs)}</p>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>
        Reset
      </button><br />
      <hr />
      <Popup trigger=
        {<button> Credits </button>}
        position="right center">
        <div id='normal'> Created by Safiullah Saleem on 2/9/24 </div>
        <button>Click here</button>
      </Popup>
    </div>
  );
};

export default App;
