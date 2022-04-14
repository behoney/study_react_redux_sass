import React, { useState, useEffect, useRef } from 'react'
import "./CH2.scss"

const Welcome = (props) => {
    return (<div>
        hello {props.name}
    </div>)
}

const Clock = () => {
    const [clock, setclock] = useState(new Date())
    useEffect(() => {
        const itv = setInterval(() => {
            setclock(new Date())
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
        <Clock />
    </>)
}

export default CH2