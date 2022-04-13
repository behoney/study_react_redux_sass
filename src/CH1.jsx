import React from 'react'

function CH1() {
  const text = "hi,,,,,";

  const Template = ({ title, detail, children }) => (
    <div>
      <h1>{title}</h1>
      <h3>{detail}</h3>
      {children}
    </div>
  )

  const Test1_5 = ()=><Template title="test1_5" detail={"detail....1_5"}></Template>

  return (
    <>
      <Template title="title,," detail="detail...">
        <span>span children</span>
        <Test1_5></Test1_5>
      </Template>
    </>
  )
}

export default CH1