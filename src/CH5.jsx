// part2

import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import "./CH5.scss"
import { useSelector, useDispatch } from 'react-redux'
import {
    increment, decrement, incrementByAmount
} from './redux/counterSlice';


function CH5() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();


    return (<>
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>!!</button>
            </div>
        </div>

    </>)
}

export default CH5;


// part2

export function CH5_Friend() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();


    return (<>
        <div>
            <div>
                <span>{count}</span>
            </div>
        </div>

    </>)
}


