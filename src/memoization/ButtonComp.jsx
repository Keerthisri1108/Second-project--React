import React from 'react'

const ButtonComp = (props) => {
    let {children,incFunc}=props
    console.log(`Rendering Button Component for ${children}`);
    

  return (
    <>
      <button onClick={incFunc}>{children}</button>
    </>
  )
}

export default React.memo(ButtonComp)
