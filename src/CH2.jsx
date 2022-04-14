import React, { useState, useEffect, useRef } from 'react'
import "./CH2.scss"

const Welcome = (props) => {
    return (<div>
        hello {props.name}
    </div>)
}

function CH2() {

    return (<>
        <Welcome name="A"></Welcome>
        <Welcome name="B"></Welcome>
        <Welcome name="C"></Welcome>
        <Welcome name="D"></Welcome>
    </>)
}

export default CH2