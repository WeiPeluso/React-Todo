import React,{Component} from 'react'


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
        <form >
           <input type="text" 
                  name="todo"
                  value={this.state.todo}
                  onChange={this.inputHandler}/>
            <button onClick={this.handleSubmit}>Add Todo</button>
            <button onClick={(e)=>{
                e.preventDefault()
                this.props.removeCompleted()}}>Clear Completed</button>
            </form>
           
             </div>
    )

}
}

export default TodoForm;