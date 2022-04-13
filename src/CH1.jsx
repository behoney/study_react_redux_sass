import React from 'react'

function CH1() {
  const text = "hi,,,,,";

  const Template = ({ title, detail }) => (
    <div>
      <h1>{title}</h1>
      <h3>{detail}</h3>
    </div>
  )

  return (
    <>
      <Template title="title,," detail="detail..."></Template>
    </>
  )
}

export default CH1