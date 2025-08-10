import React from 'react'
import { useState } from 'react'
import ComponentA from './Life-cycle/ComponentA'
import ErrorBoundary from './Life-cycle/error-boundary/ErrorBoundary'
import Product from './Life-cycle/error-boundary/Product'
import Models from '../portals/Models'
import SideEffect from './fetch-data/SideEffect'
import FetchProduct from './fetch-data/FetchProduct'
import Parentcomp from './memoization/Parentcomp'
import MemoComp from './memoization/MemoComp'
import TodoList from './task/TodoList'



const App = () => {

  let[open,setOpen]=useState(false)
  let openmodel=()=>{
    setOpen(true)
  }
  let closemodel=()=>{
    setOpen(false)
  }
    return (
    <>
      {/* <ComponentA/> */}
      {/* <ErrorBoundary>
        <Product product="TV"/>
        <Product product="Mobile"/>
      </ErrorBoundary> */}
    {/*       
        <button onClick={openmodel}>Open Models</button>
      <Models open={open} closeModel={closemodel}/>
          */}
      {/* <SideEffect/> */}
      {/* <FetchProduct/> */}
      {/* <Parentcomp/> */}
      {/* <MemoComp/> */}
      <TodoList/>
    



















    </>
 )}
export default App
