import React, { useState, useEffect, useRef } from 'react'
import "./CH1.scss"

function CH1() {

  const handleEvent = (e) => {
    e.preventDefault();
    console.dir(e.target.elements.phone.value);
  }

  const [num, setNum] = useState("")
  const handleInput = (e) => {
    setNum(e.target.value)
    console.log(num);
  }

  return (
    <>
      <form action="/test" onSubmit={handleEvent}>
        <label htmlFor="phone">phone</label>
        <input type="text" name='phone' onChange={handleInput} />
        <input id='submit' type="submit" disabled={num.length < 5} />
      </form>
      <p>{num}</p>
    </>
  )
}

export default CH1