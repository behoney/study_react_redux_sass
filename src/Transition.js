import React from 'react'
import "./Transition.scss"

function Transition() {
    return (
        <div>
            <div>1. Transition</div>
            <Ex1 />
            <Ex2 />
        </div>
    )
}

const Ex1 = () => {
    return (<>
        <div className="container">
            <div className='transition-1'>
                transition basic
            </div>
        </div>
    </>)
}

const Ex2 = () => {
    const Block = ({ delay }) => {
        const wait = delay.toString() + "s"
        return (<div className='transition-2' style={{ transitionDelay: wait }}>
            transition delay: {wait}
        </div>)
    }
    return (
        <div className="container">
            <Block delay="0.5"></Block>
            <Block delay="1"></Block>
            <Block delay="2"></Block>
        </div>)
}



export default Transition