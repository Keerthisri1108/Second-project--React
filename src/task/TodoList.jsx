import  { useState, Fragment } from 'react'

const TodoList = () => {
    let [task,setTask]=useState('')
    let[list,setList]=useState([])

    let handleChange=(e)=>{
        setTask(e.target.value)
    }
    /**
     * Handles the form submission for adding a new task.
     * Prevents the default form behavior, validates the input,
     * alerts the user if the task is empty, and adds the task to the list if valid.
     *
     * @param {React.FormEvent} e - The form submission event.
     */
    let handleSubmit=(e)=>{
        e.preventDefault()
        if(task===""){
            alert("Please enter a task")
        }
        else{
            setList([...list,task])
            setTask("")
        }
    }    
    let handleDelete=(x)=>{
        let filterarry=list.filter((value,index)=> index!==x)
                console.log(filterarry)
                setList(filterarry)
    
    }


  return (
    <>
    <h2>TODO LIST</h2>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Tasks here'onChange={handleChange} value={task}/>
        <button>+</button>
    </form>
    
        {
        list.map((value, index) => (
            <Fragment key={index}>
                <h3>{value}</h3>
                <button onClick={() => handleDelete(index)}>X</button>
            </Fragment>
        ))
        }

    </>
  )
}
export default TodoList
