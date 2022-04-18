import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const ReviewAnimated = () => {
    const state = useSelector((state) => state.review)
    const [position, setPosition] = useState({ cx: 0, cy: 0, itv: undefined })

    useEffect(() => {
        position.itv = setInterval(() => {
            if (state.activated)
                setPosition({
                    cx: Math.random() * 100 + 50,
                    cy: Math.random() * 100 + 50
                })
        }, 300);
        return () => {
            if (position.itv) {
                clearInterval(position.itv);
            }
        }
    }, [state])


    return (<div
        style={{ padding: "64px" }}>
        <svg
            height="2cm" width="2cm" version='1.1'
            viewBox='0 0 200 200'
        >
            <circle style={{ transition: "0.2s" }} fill={state.activated ? "blue" : "red"} cx={200 + state.activated ? position.cx : 0} cy={200 + state.activated ? position.cy : 0} r={25}></circle>
        </svg>
    </div >)
}

export default ReviewAnimated