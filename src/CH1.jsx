import React, { useState } from 'react'

function CH1() {
  const [test, setTest] = useState('')
  return (
    <>
      <input onInput={(e) => setTest(e.target.value)} type="text"></input>
      <div> <p>
        {test}
      </p></div>
    </>
  )
}

export default CH1