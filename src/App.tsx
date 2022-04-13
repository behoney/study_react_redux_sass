import React from 'react';
import './App.scss';
import CH1 from "./CH1"
import Keyframe from './Keyframe';
import Transform from './Transform';
import Transition from './Transition';

function App() {
  return (
    <div className="App">
      <Keyframe />
      <Transform />
      <Transition />
    </div>
  );
}

export default App;
