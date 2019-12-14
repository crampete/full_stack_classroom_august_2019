import React from "react"
import axios from "axios"

class TodoList extends React.Component{
    constructor(){
        super()
        this.state={
            todos : []
        }
    }
    componentWillMount(){
       this.getTodos()
    }

    getTodos = () =>{
        let token = localStorage.getItem("token")
        axios.get("http://localhost:8000/todo",{
            headers : {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            this.setState({todos: res.data})
        })
    }

    onDelete = () =>{
        let token = localStorage.getItem("token")
        axios.delete("http://localhost:8000/todo",{
            headers : {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
           this.getTodos()
        })
    }

    createTodo = ()=>{
        this.props.history.push("/create-todo")
    }
    render(){
        return (
            <div>
                 <div className="row">
                 <div className="col-md-4 offset-md-4">
                 <h4 className="mt-2 mb-2">Todos
                    <button className="btn btn-sm ml-4 btn-primary" onClick={this.createTodo}>
                        Create Todo
                    </button>
                 </h4>
                 </div>
                </div>
                <div className="row">
                <div className="col-md-4 offset-md-4">
                    {
                        this.state.todos.map((todo)=>(
                            <div key={todo._id} className="card mb-2">

                                <div className="card-body">
                                    <h5 className="card-title">{todo.title}</h5>
                                    <p className="card-text">{todo.description}</p>
                                    <button className="btn btn-primary btn-sm mr-2">Mark as Done</button>
                                    <button className="btn btn-danger btn-sm" onClick={this.onDelete}>Delete</button>
                                </div>

                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        )
    }
}

export default TodoList