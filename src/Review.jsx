import React, { useEffect, useState } from 'react'
import { Provider } from "react-redux"
import configureStore from './redux/review_store.js'

import { useSelector, useDispatch } from 'react-redux'
import { activate, activateByClick, deactivate } from './redux/review_slice'

import ReviewAnimated from "./ReviewAnimated"

function Review() {

    return (
        <Provider store={configureStore}>
            <div>Review_redux</div>
            <Controller></Controller>
            <ReviewAnimated></ReviewAnimated>
        </Provider >
    )
}

const Controller = () => {
    const state = useSelector((state) => state.review)
    const dispatch = useDispatch();

    useEffect(() => {

        console.log(state.activated);
    }, [state])

    return (<div
        style={{
            width: "150px",
            heigh: "150px",
            margin: "32px",
            backgroundColor: "lightgray",
            textAlign: "center",
            padding: "32px",
        }}
        onMouseOver={
            () => dispatch(activate())
        }
        onMouseLeave={
            () => dispatch(deactivate())
        }
        onMouseDown={
            () => dispatch(activateByClick(1500))
        }
    >
        hover to animate
        State: {state.activated ? "true" : "false"}
    </div>)
}

export default Review