import React from 'react';
import './App.scss';
import CH1 from "./CH1"
import CH2 from "./CH2"
import CH3 from "./CH3"
import CH4 from './CH4';
import CH5, { CH5_Friend } from './CH5';

import Keyframe from './Keyframe';
import Review from './Review';
import Spinner from './Spinner';
import Transform from './Transform';
import Transition from './Transition';
import WebAnimations from './WebAnimations';

import test from "./ts/class"

console.log(
  test()
);


function App() {
  return (
    <div className="App">

      {/* <Review></Review> */}
      {/* <CH5 /> */}
      {/* <CH5_Friend></CH5_Friend> */}
    </div>
  );
}

export default App;