import React, { useState, useEffect, useRef } from 'react'
import "./CH1.scss"

function CH1() {

  const handleEvent = (e) => {
    e.preventDefault();
    console.dir(e.target.elements);
  }

  return (
    <>
      <form action="/test" onSubmit={handleEvent}>
        <label htmlFor="name">name</label>
        <input type="text" name='name' />
        <label htmlFor="other">other</label>
        <input type="text" name='other' />

        <input id='submit' type="submit" />
      </form>
    </>
  )
}

export default CH1