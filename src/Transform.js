import React from 'react'
import "./Transform.scss"

function Transform() {
    return (
        <div >
            2. Transform
            <div className='transform-container'>

            </div>
            <Ex1 />
        </div>
    )
}

const Ex1 = () => {
    return (
        <>
            <div className='transform-1' id='scale'>
                transform scale
            </div>
            <div className='transform-1' id='rotate'>
                transform rotate
            </div>
            <div className='transform-1' id='translate'>
                transform translate
            </div>
            <div className='transform-1' id='skew'>
                transform skew
            </div>

            <div className='transform-1' id='scale-origin'>
                transform scale - origin
            </div>
  
        </>
    )
}

export default Transform