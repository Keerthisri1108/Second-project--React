import React from 'react'
import { createPortal } from 'react-dom'

const Models = (props) => {
    let {open,closeModel}=props

    if(open=== false){
        return null  
    }

// using Portal (new DOM node)
    // return createPortal(

    //     <>
    //     <h2>hello, I am Models</h2>
    //     <button onClick={closeModel}>closeModel</button>
    //     </>,document.getElementById('portal')

    // )


    //return statement 
    return (
    <>
    <h2>hello, I am Models</h2>
    <button onClick={closeModel}>Close Models</button>

    </>
  )
}

export default Models
