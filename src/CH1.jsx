import React, { useState, useEffect } from 'react'

const Child = () => {
  useEffect(() => {
    console.log(1);
    return () => console.log(2);
  })
  return <>child~</>
}
function CH1() {

  useEffect(() => {
    console.log(3);
    return () => console.log(4);

  }, [])

  const [show, setshow] = useState(false)

  const clickHandler = () => {
    setshow(prev => !prev)
  }

  return (
    <>
      <div>
        <button onClick={clickHandler}>search</button>
        <input type="text" placeholder='' />
        {show ? <p>result</p> : <Child />}

      </div>
    </>
  )
}

export default CH1