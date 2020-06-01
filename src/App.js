import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todos:[],
      searchTerm:''
    }
  }

  addTodo = todoName =>{
      const newTodo={
        name: todoName,
        id: new Date(),
        completed: false,
      }
      this.setState({
        todos:[...this.state.todos,newTodo]
      })
  }

  toggleTodo = todoID=>{

  this.setState({
    todos:this.state.todos.map(todo=>{
      if(todo.id===todoID){
        return{
          ...todo,
          completed:!todo.completed
        }
      }
      else{
        return todo
      }
    })
  }) 

  }
 
    removeCompleted =()=>{
      this.setState({
        todos:this.state.todos.filter(todo=>{
          return todo.completed===false;
        })

      })

    }

    searchHandler=(e)=>{
       this.setState({
         searchTerm:e.target.value
       })

       this.setState({
        todos:this.state.todos.filter(todo=>{
          return todo.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        })

      })

    }
  render() {
    return (
      <div className="app">
        <h2>To-Do List</h2>
           <input type="text" 
                  name="search" 
                  placeholder="search" 
                  value={this.state.searchTerm}
                  onChange={this.searchHandler}/>
         <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
         <TodoForm addTodo={this.addTodo} removeCompleted={this.removeCompleted}/>
      </div>
    );
  }
}

export default App;
