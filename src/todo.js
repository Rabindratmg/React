import React, { Component } from 'react';
import Data from "./data";
import Contact from "./props";
class Todo extends Component {
    state = { 
        todo_task:Data
       
     }

     handleChange=(id)=>{
         console.log('i was called')
         this.setState(prevstate=>{
             const updatedTodos= prevstate.todo_task.map(datas=>{
                 if(datas.id===id){
                     datas.completed = !datas.completed
                     console.log(datas.completed)
                 }
                 return datas
             })
             return {
                todo_task:updatedTodos
                 
             }
             console.log(updatedTodos)
            
         })
        
     }
    
    render() { 
        console.log(this.state.todo_task)
        const task = this.state.todo_task.map(data=><Contact key={data.id} data={data} 
        handleChange={this.handleChange}/>)
        return (  
            <div>
                {task}
            </div>
        );
    }
}
 
export default Todo;