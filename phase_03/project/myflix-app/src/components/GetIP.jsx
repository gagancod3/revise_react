import React, { useEffect, useState } from 'react';
import axios from 'axios'
 
function GetIP() {
    const [ip,setIp]=useState();
    useEffect(()=>{
        axios.get('https://geolocation-db.com/json/')
        .then(response=>setIp(response.data.IPv4))
        .catch(err=> console.log(err))
    },[])
    return (
        <>
        {ip?<span>{ip}</span>:<span>Loading..</span>}
        </>
    );
}
 
export default GetIP;