import React, { useState, useEffect, useRef } from 'react'
import "./CH1.scss"

const todo = [
  { id: 1, value: "value1" },
  { id: 2, value: "value2" },
  { id: 3, value: "value3" },
  { id: 4, value: "value4" }
]

function CH1() {
  const [item, setItem] = useState(todo)

  const handleDoneBtn = (id) => {
    setItem(item.filter(e => e.id != id));
    console.log(item);
  }
  return (
    <>
      <div>
        {item.map(e => {
          return (<div key={e.id}>
            <span >{e.value}</span>
            <button onClick={() => handleDoneBtn(e.id)}>Done</button>
          </div>)
        })}
      </div>

      <button onClick={() => {
        setItem(todo);
      }}>
        Restore
      </button>
    </>

  )
}

export default CH1