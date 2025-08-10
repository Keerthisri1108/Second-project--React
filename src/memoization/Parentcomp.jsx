import React, { useCallback, useState } from 'react'
import Count from './Count'
import Title from './Title'
import ButtonComp from './ButtonComp'


/**
 * Parentcomp is a React functional component that manages two pieces of state: marks and percent.
 * It renders a Title component, two Count components to display the current marks and percentage,
 * and two ButtonComp components to increment each value respectively.
 *
 * return (
 *   <Parentcomp />
 * )
 */
const Parentcomp = () => {

    let [marks,setMarks]=useState(50)
    let[percent,setPercent]=useState(75)
    
    // ! useCallback (callbackfunc,array of dependency) is used to memoize a function
    let incMarks =useCallback(()=>setMarks(marks+1),[marks])
    let incPercent =useCallback(()=>setPercent(percent+1),[percent])


    // let incMarks=()=>  setMarks(marks+1)
    
    // let incPercent=()=> setPercent(percent+1)
    

  return (
    <>
      <Title/>
      <Count count={marks} text="Marks"/>
      <ButtonComp incFunc={incMarks}>Incr Marks</ButtonComp>
      <Count count={percent} text="Percentage"/>
      <ButtonComp incFunc={incPercent}>Incr Percentage</ButtonComp>
      
    </>
  )
}

export default Parentcomp
