import React, { useEffect, useState } from "react";

const ClockHook = () => {
    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        const timerID = setInterval(()=> setDate(new Date(), 1000));
        return () => clearInterval(timerID);
    },[]);
    return( <div style={{float:'right'}}>
    <h4>{date.toLocaleDateString()}</h4>
    </div>)
}
export default ClockHook;