import React from 'react'

function CH1() {
  const text = "hi,,,,,";
  return (
    <React.Fragment children={
      [
        React.createElement('h1', null, text),
        React.createElement('h2', null, text),
        React.createElement('h3', null, text),
      ]
    } />
  )
}

export default CH1