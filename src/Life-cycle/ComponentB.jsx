import React, { Component } from 'react'

export default class ComponentB extends Component {
  //! 3} Unmounting Phase
  componentWillUnmount(){
    console.log("ComponentB componentWillUnmount");

    

}
  
    render() {
    return (
      <div>Component B</div>
    )
  }
}

