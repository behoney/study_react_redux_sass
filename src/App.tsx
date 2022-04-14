import React from 'react';
import './App.scss';
import CH1 from "./CH1"
import Keyframe from './Keyframe';
import Spinner from './Spinner';
import Transform from './Transform';
import Transition from './Transition';

function App() {
  return (
    <div className="App">
      <Spinner />
      <Keyframe />
      <Transform />
      <Transition />
    </div>
  );
}

export default App;
