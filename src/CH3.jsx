import React, { useState, useEffect, useRef, useReducer } from 'react'
import "./CH3.scss"



function CH3() {
    return (<>
        <Dialog msg="my message"></Dialog>
        <Dialog msg={messageDiv}></Dialog>
    </>)
}



export default CH3


const messageDiv = (<div
    onClick={() => {
        console.log("hi");
    }}
    style={{
        textAlign: "center",
    }}>
    hello messageDiv</div>)


const Dialog = (props) => {
    const [open, setOpen] = useState(false)
    return (<>
        <button onClick={
            () => setOpen(true)
        }>
            open
        </button>
        {open && <div style={{
            backgroundColor: "#888",
            color: "#fff"
        }}>
            {props.msg}
            <button onClick={
                () => setOpen(!open)
            }>
                close
            </button>
        </div>}
    </>)

}
















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