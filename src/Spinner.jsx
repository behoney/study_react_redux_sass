import React from 'react'
import "./Spinner.scss"

function Spinner() {
    return (
        <>
            <div>4.Spinner</div>
            <Ex1 />
        </>
    )
}


const Ex1 = () => {
    return (<>
        <div className='wrapper'>
            <span className='loader loader-spinner'></span>
            <span>Loading...</span>
        </div>
    </>)
}
export default Spinner