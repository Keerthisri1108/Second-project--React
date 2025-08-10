import React,{memo} from 'react'


function Count(props) {
// count is pure function component.So,memo works on it
    let {count,text}=props
    console.log(`Rendering count component for ${text}`);
    
  return (
    <>
    <h3> {text}:{count}</h3>
      
    </>
  )
}
// React.memo is a higher-order component (HOC) that serves as a performance optimization tool. It prevents a functional component from re-rendering if its props have not changed.


export default memo(Count)
