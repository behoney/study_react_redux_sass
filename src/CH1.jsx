import React, { useState, useEffect } from 'react'
import "./CH1.scss"

const Block = (props) => {
  return (
    <div className='block' {...props}></div>)
}

function CH1() {
  console.log("hi");
  return (
    <>
      <Block />
      <Block style={{
        backgroundColor: "green"
      }} />
      <Block id="hover" style={{
        backgroundColor: "yellow"
      }} />
    </>
  )
}

export default CH1