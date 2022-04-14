import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import "./CH4.scss"
import moment from 'moment-timezone'
import { add, compareAsc, format } from "date-fns"


function CH4() {
    return (<>
        {/* <MomentExample /> */}
        <FnsExample />
    </>)
}



export default CH4;

const FnsExample = () => {

    const dates = [
        add(new Date("2000-01-02"), { years: 1 }),
        add(new Date("2000-01-02"), { month: 1 }),
        add(new Date("2000-01-02"), { minutes: 1 }),
        add(new Date("2000-01-02"), { seconds: 1 }),
        add(new Date("2000-01-02"), { day: 1 }),

    ]
    dates.sort(compareAsc)
    return (<div>
        {
            format(new Date(), "yyyy-mm-dd")
        }
        {dates.map(e => {
            return (<div>
                {e.toString()}
            </div>)
        })}
    </div>)
}

const MomentExample = () => {
    const [result, setResult] = useState("")
    const [date, setDate] = useState("")

    const momentDate = moment();
    return (<div>
        {/* {momentDate.add(1, "day").format("YY-MM-DD")} */}

        <div>
            <input type="date" onChange={(e) => {
                console.log(e.target.value);
                setResult(moment(e.target.value).format("ddd"))
            }} />
            {result}
        </div>



    </div>)

}

