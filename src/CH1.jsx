import React, { useState, useEffect, useRef } from 'react'
import "./CH1.scss"

function CH1() {
  const [id, setId] = useState("")
  const handleID = (e) => {
    console.log(id);
    setId(e.target.value)
  }

  const [pw, setPW] = useState("")
  const handlePW = (e) => {
    console.log(pw);
    setPW(e.target.value)
  }


  const handleLoginClick = (e) => {
    console.warn(id, pw);
    return;
  }

  // why error?
  // const ID = ({ handleID }) => {
  //   return (<>
  //     <label>ID: </label>
  //     <input onChange={handleID} type="text"></input>
  //   </>)
  // }
  // const PW = ({ handlePW }) => {
  //   return (<>
  //     <label>PW: </label>
  //     <input onChange={handlePW} type="password"></input>
  //   </>)
  // }
  
  return (
    <>
      <div>
        <div>
          <ID handleID={handleID}></ID>
        </div>
        <div>
          <PW handlePW={handlePW}></PW>
        </div>
        <button onClick={handleLoginClick} disabled={!(id.length > 0 && pw.length > 0)} > LOGIN </button>
      </div>

    </>

  )
}


const ID = ({ handleID }) => {
  return (<>
    <label>ID: </label>
    <input onChange={handleID} type="text"></input>
  </>)
}
const PW = ({ handlePW }) => {
  return (<>
    <label>PW: </label>
    <input onChange={handlePW} type="password"></input>
  </>)
}




export default CH1