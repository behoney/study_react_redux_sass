import React, { useState, useEffect, useRef } from 'react'
import "./CH1.scss"

function CH1() {

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
    setTimeout(() => {
      ref.current.id = "hover"
    }, 500)
  }, []);
  return (
    <>
      <input className='block' ref={ref} />
    </>
  )
}

export default CH1