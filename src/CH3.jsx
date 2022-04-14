import React, { useState, useEffect, useRef, useReducer } from 'react'
import "./CH3.scss"

const Reducer = () => {
    const init = { count: 0, id: 1 };

    const reducer = (state, action) => {
        console.log(state, action);
        switch (action.type) {
            case 'up':
                return { count: state.count + 1 }
            case 'down':
                return { count: state.count - 1 }
            default: break;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);

    return (<>
        <button onClick={() => dispatch({ type: "up" })}>
            up
        </button>
        <button onClick={() => dispatch({ type: "down" })}>
            down
        </button>
        {state.count}
    </>)
}

function CH3() {
    return (<>
        <Reducer></Reducer>

    </>)
}


export default CH3
