// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component{
    
    constructor(){
        super();
        this.state={ }
    }

   render(){

   return (
           <div className='todo-list'>
           { this.props.todos.map(todo=>
            <Todo toggleTodo={this.props.toggleTodo} key={todo.id} todo={todo}/>
            )}
           </div>
   )}

}

export default TodoList 