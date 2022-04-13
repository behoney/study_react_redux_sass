import React, { useEffect, useRef } from 'react'
import "./Keyframe.scss"

function Keyframe() {
    return (
        <div>
            3. Keyframe
            <div className='keyframe-container'>

            </div>
            <Ex1></Ex1>
            <Ex2></Ex2>
        </div>
    )
}

const Ex1 = () => {
    return (
        <div className='block' id='ani1'>
            Keyframe ani1
        </div>
    )
}
const Ex2 = () => {
    const targetRef = useRef();
    let animeState = false;

    const over = () => {
        if (animeState) return;
        animeState = true;
        targetRef.current.style.animationPlayState = 'running';
    }
    const leave = () => {
        if (!animeState) return;
        animeState = false;
        targetRef.current.style.animationPlayState = 'paused';
    }

    return (
        <>
            <div ref={targetRef} className='block' id='ani1'>
                Controlling ani1
            </div>
            <div className='block' id="actionArea" onMouseOver={() => over()} onMouseLeave={() => leave()}>
                hover to stop
            </div>
        </>
    )
}

export default Keyframe