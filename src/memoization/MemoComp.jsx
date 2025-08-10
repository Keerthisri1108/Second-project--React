import {useState,useMemo} from 'react'

const MemoComp = () => {
    let [count,setCount]=useState(0)
    let [num,setNum]=useState(0)

    let incount=()=>setCount(count+1)
    let incnum=()=> setNum(num+1)
    //!useMemp is used to memoize a value
    let isEven=useMemo(()=>{

        let i=0
        while(i<999){
            i++
        }
        return count%2===0
     },[count])

  return (
    <>
      <button onClick={incount}>Count:{count}</button>
      {isEven ?'Even':'Odd'}<br />
       <button onClick={incnum}>Number:{num}</button>
    </>
  )
}

export default MemoComp
