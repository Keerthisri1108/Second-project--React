import React, { Component } from 'react'
import ComponentB from './ComponentB'


//Shortcut -->rcc
class ComponentA extends Component {

    // ! 1> Mounting Phase

  constructor(props){
            super(props)
            this.state={
                subject:"React JS"
            } 

    console.log("ComponentA Constructor");



        //? this method is th best place to intitialise stae and blinding 'this' keyword
        // Here you can't code for sise effects

    }

    /**
     * React lifecycle method that is invoked right before calling the render method, both on the initial mount and on subsequent updates.
     * It should return an object to update the state, or null to update nothing.
     * 
     */


    static getDerivedStaeFromProps(){
        // Rarely used method
        // @ Get the state based on the props
        // return a object or null
        // No side effects allowed

        console.log("ComponentA getDerivedStaeFromProps");
        return null
    }


    componentDidMount(){
        // ! this method gets invoked after render method and only "ONCES"
        // #Side effects allowed
        // ~>
        console.log("ComponentA componentDidMount");
    

    }



    // ! 2] Updating Phase
    shouldComponentUpdate(){
      // Decides wheather the component should updated or not
      // returns a boolean value
      // No side effects allowed

      // default value is true

      console.log("ComponentA shouldComponentUpdate");
      return true


    }




    getSnapshotBeforeUpdate(){
      // Rearly used method
      // ! here no side effects allowed 
      
      console.log("ComponentA getSnapshotBeforeUpdate");
      return null
    
      }
      componentDidUpdate(){
        // !this method gets invoked after every re-rendering of component
        // ! Side effects allowed
        console.log("ComponentA componentDidUpdate")

    }
    
  render() {
    //only method that is mandatory
    // No side effects allowed
    console.log("ComponentA render");

    return (  
      <>
        <h1>ComponentA</h1>

        <h3>{this.state.subject}</h3>
        {this.state.subject =="React JS" ? <ComponentB/>:<></>}
        <button onClick={()=>this.setState({subject:"Angular"})}>Change Subject</button>
      
      </>
    )
  }
}
export default ComponentA

