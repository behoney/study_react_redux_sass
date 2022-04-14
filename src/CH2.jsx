import React, { useState, useEffect, useRef } from 'react'
import "./CH2.scss"

const Welcome = (props) => {
    return (<div>
        hello {props.name}
    </div>)
}

const Clock = ({ id }) => {
    const [clock, setclock] = useState(new Date())
    useEffect(() => {
        const itv = setInterval(() => {
            setclock(new Date())
            console.log(id);
        }, 1000)
        return () => {
            clearInterval(itv);
        }
    }, [])
    return (<div>
        {clock.toLocaleString()}
    </div>)
}

function CH2() {

    return (<>
        <Clock id="1" />
        <Clock id="2" />
        <Clock id="3" />
        <Clock id="4" />
    </>)
}

export default CH2