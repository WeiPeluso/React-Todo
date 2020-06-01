import React,{Component} from 'react'
import "./TodoForm.css"


class TodoForm extends Component{

    constructor(){
        super();
        this.state={
            todo: '',
        }
    }

    inputHandler=(e)=>{
        this.setState({todo:e.target.value})
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo:'',
        })
    }

render(){

    return(
        <div>
        <form className="addForm">
           <input className="addInput" type="text" 
                  name="todo"
                  value={this.state.todo}
                  onChange={this.inputHandler}/>
            <button className="addButton" onClick={this.handleSubmit}>Add Todo</button>
            <button className="deleteButton" onClick={(e)=>{
                e.preventDefault()
                this.props.removeCompleted()}}>Clear Completed</button>
            </form>
           
             </div>
    )

}
}

export default TodoForm;