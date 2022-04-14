import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import "./CH4.scss"
import moment from 'moment-timezone'



function CH4() {
    return (<>
        <MomentExample />
    </>)
}



export default CH4;
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

