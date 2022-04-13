import React, { useState, useEffect } from 'react'

function CH1() {

  const [value, setValue] = useState(0);
  let val = value;

  useEffect(() => {
    console.log("value from local", window.localStorage.getItem('value'));
  }, [val])

  useEffect(() => {
    console.log("value from deps", value);
    val = value;
  }, [value, val])

  const inc = () => {
    setValue(value + 1);
    window.localStorage.setItem("value", value);
  }

  return (
    <>
      <button onClick={() => inc()}>test</button>
      <p>
        {(value + val) / 2}
      </p>
    </>
  )
}

export default CH1