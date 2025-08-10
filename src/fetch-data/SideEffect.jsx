import React from 'react'
import { useEffect,useState } from 'react'  //this is hook 

const SideEffect = () => {
    let[count,setCount]=useState(0)
    let[num,setNum]=useState(0)


    let incCount=()=>setCount(count+1)
    let incNum=()=> setNum(num+1)


    //! useEffect(callbackfunc,array of dependencies) is used to code for side-effects.
    //! useEffect() with empty array of dependences acts like ComponetDidMount()
 

    useEffect(()=>{
        console.log("UseEffect getting invoked");
        
    },[]) 
 
 
    return (
    <>
    <h2>Count:{count}</h2>
    <button onClick={incCount}>Increase Count</button>
     <h2>Number:{num}</h2>
    <button onClick={incNum}>Increase Number</button>
      
    </>
  )
}

export default SideEffect
