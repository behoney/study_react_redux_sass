import React, { useState, useEffect, useRef } from 'react'
import "./CH2.scss"


function CH2() {
    return (<>

    </>)
}


export default CH2

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

const Bubble = () => {
    const clickP = () => { console.log(1); }
    const clickC = () => { console.log(2); }
    const clickCP = () => { console.log(3); }
    const clickCC = (e) => {
        e.stopPropagation();
        console.log(4);
    }

    return (<>
        <div onClick={clickP} onClickCapture={clickCP} style={{ backgroundColor: "#88888888" }}>
            hi
            <div onClick={clickC} onClickCapture={clickCC} style={{ backgroundColor: "#febe9588" }}>
                hello

            </div>
        </div>
    </>)
}
