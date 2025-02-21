import React, { useEffect, useState } from 'react'

const LiveClock = () => {

    const [time, setTime] = useState("");

    useEffect(()=>{
        const getTime = new Date();
       const times = setInterval(()=>{
         setTime(getTime.toLocaleTimeString());
       },1000);

       return ()=> clearInterval(times);
    },[time]);

  return (
   <>
    <div className="container w-screen h-screen bg-black flex justify-center items-center">
  
     <h1 className='max-[200px]:text-2xl max-[400px]:text-4xl max-[640px]:text-6xl text-white font-bold sm:text-6xl md:text-8xl'>{time}</h1>
    </div>
   </>
  )
}

export default LiveClock;