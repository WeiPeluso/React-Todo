import React, {Component} from 'react'
import "./Todo.css"

class Todo extends Component{
 

    constructor(){
        super();
        this.state={}
    }
 
     render(){
         return(<div onClick={()=>this.props.toggleTodo(this.props.todo.id)}
         className={`todo${this.props.todo.completed ? " completed": ""}`}
         >{this.props.todo.name} </div>)
       
     }

}

export default Todo;