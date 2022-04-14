import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import "./CH3.scss"



function CH3() {
    return (<>
        <Posts></Posts>
    </>)
}

const commentList = [
    { title: "Com", likes: 1, id: 1 },
    { title: "ment", likes: 1, id: 2 },
    { title: "ssss", likes: 1, id: 999 }
]

const Posts = () => {
    const [list, setList] = useState(commentList)
    const createPost = () => {
        setList(
            [
                ...list,
                { title: "temp" + list.length, likes: 0, id: list.length }
            ]
        )
    }

    const likeBtn = (pid) => {
        const target = list.filter(e => e.id === pid)[0];
        target.likes += 1;
        setList(
            [...list]
        )
    }

    useEffect(() => {
        const itv = setTimeout(() => {
            // createPost()
        }, 1000);

        return () => {
            clearTimeout(itv);
        }
    }, [list])

    return (<div>
        {
            list.map((e) => {
                return <Content title={e.title} key={e.id} likes={e.likes} handler={() => likeBtn(e.id)} />
            })
        }
    </div>)
}

const Content = ({ title, likes, id, handler }) => {
    return (<div>
        <span>

            {title} : {likes}
        </span>
        <button onClick={handler}>like</button>

    </div>)
}

export default CH3





const messageDiv = () => {
    return (<div
        onClick={() => {
            console.log("hi");
        }}
        style={{
            textAlign: "center",
        }}>
        hello messageDiv</div>)
}

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