import React, { useEffect, useRef } from 'react'
import "./WebAnimations.scss"

function WebAnimations() {


    return (
        <div>
            {/* <TransitionEvents></TransitionEvents> */}
            <AnimatedInput></AnimatedInput>
        </div>
    )
}

const AnimatedInput = () => {


    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.addEventListener('focusout', () => {
            inputRef.current.classList.remove('shadow');
            inputRef.current.classList.remove('start');

        })
    }, [])

    return (<div>
        <h2>
            name
        </h2>
        <input
            name='name'
            className='inputBox new'
            onFocus={() => {
                inputRef.current.classList.add('shadow')
                inputRef.current.classList.add('start')
            }}
            onTransitionEnd={() => {
                inputRef.current.classList.add('shadow')
            }}
            ref={inputRef}></input>

    </div>)

}

const TransitionEvents = () => {
    const ballRef = useRef();
    const msgRef = useRef();
    useEffect(() => {
        // ballRef.cure
        const trigger = ballRef.current;
        const msg = msgRef.current;

        trigger.addEventListener('transitionrun', function () {
            msg.textContent = 'transitionrun';
        });

        trigger.addEventListener('transitionstart', function () {
            msg.textContent = 'transitionstart';
        });

        trigger.addEventListener('transitioncancel', function () {
            msg.textContent = 'transitioncancel';
        });

        trigger.addEventListener('transitionend', function () {
            msg.textContent = 'transitionend';
        });

        return () => {
        }
    }, [])

    return (<div>
        <div ref={ballRef} className='WebAnimations ball'>
            <p>
                ball
            </p>
        </div>
        <p ref={msgRef}>
            hover to start
        </p>
    </div>)
}

export default WebAnimations