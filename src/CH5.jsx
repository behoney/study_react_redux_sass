import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import "./CH5.scss"
import { useSelector, useDispatch } from 'react-redux'
import {
    increment, decrement, incrementByAmount
} from './redux/counterSlice';

import { QueryClientProvider, QueryClient, useQuery, focusManager } from 'react-query';

const queryClient = new QueryClient();

function CH5() {
    return (
        <QueryClientProvider client={queryClient}>
            <Page />
        </QueryClientProvider>
    )
}

export default CH5;

const Page = () => {
    const { isLoading, error, data, isSuccess, refetch } = useQuery('repoData', () => {
        return fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => {
            focusManager.setFocused(true);
            return res.json();
        }
        )
        // console.log(result);
    });

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    if (isSuccess === true) {
        return (
            <div>
                <button onClick={() => refetch()}>refresh</button>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong>👀 {data.subscribers_count}</strong>{' '}
                <strong>✨ {data.stargazers_count}</strong>{' '}
                <strong>🍴 {data.forks_count}</strong>

            </div >
        )
    }
}

function CH5_redux() {
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


