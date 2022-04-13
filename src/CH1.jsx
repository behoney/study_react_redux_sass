import React from 'react'

function CH1() {


  return (
    <>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(num =>
          <Number key={num} number={num} select={num === 1}></Number>
        )
      }
    </>
  )
}

export default CH1

const onEvent = () => { }

const Number = ({ number, select }) => {

  return number % 2 === 0 ? <h1 onMouseMove={onEvent} >{number}</h1> : select ? <h3>selected {number}</h3> : <h5>{number}</h5>
}