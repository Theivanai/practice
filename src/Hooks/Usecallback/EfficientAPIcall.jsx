import React, { useState,useCallback} from 'react'

const EfficientAPIcall = () => {
    const[city,setcity]=useState('Ranipet');

    //usecallback ensures fetchweather is recreated only when city changes
    const fetchweather=useCallback(()=>{
        console.log(`fetching weather for ${city}`);
    },[city]);

   
  return (
    <div>
        <h3>weather app</h3>
        <p>selected city:{city}</p>
        <button onClick={()=>setcity("Arcot")}>Change city</button>
        <button onClick={(fetchweather)}>Fetch weather</button>
    </div>
  )
}

export default EfficientAPIcall