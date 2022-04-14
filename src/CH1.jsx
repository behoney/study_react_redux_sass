import React, { useState, useEffect, useRef } from 'react'
import "./CH1.scss"

const apiEndpoint = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
function CH1() {

  const [data, setdata] = useState([])
  useEffect(() => {
    fetch(apiEndpoint).then(res => res.json())
      .then(e => {
        console.log(e);
        setdata(e);
      })
  }, [])

  return (
    <>
      <p>loading</p>
      {
        data.map(e => {
          return (
            <div key={e.sha}>
              <span>
                {e.author.login}
              </span>
              <button
                onClick={() => {
                  setdata(data.filter(d => d.sha !== e.sha))
                }}>remove</button>
            </div>
          )
        })
      }
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