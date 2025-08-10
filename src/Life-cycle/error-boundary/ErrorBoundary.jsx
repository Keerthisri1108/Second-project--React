import React, { Component } from 'react'

    class ErrorBoundary extends Component {
        constructor(props){
            super(props)

            this.state={
                isError: false // no error


            }
        }





    //!Error Handling Phase
    static getDerivedStateFromError(error){
        //helps to display a fallback UI
        return{
            isError: true
        }      
    }
    componentDidCatch(error,info){
        //Displays the info or error
        console.log(error,info);
        
    
    
    }
      
  
    render() {
        if (this.state.isError === true) {
            return <h3>Something went wrong.....</h3>;
        } else {
            return this.props.children;
        }
    }
}
export default ErrorBoundary