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
        let token = localStorage.getItem("token")
        axios.get("http://localhost:8000/todo",{
            headers : {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            this.setState({todos: res.data})
        })
    }
    render(){
        return (
            <div>
                <h4>Todos</h4>
                <ul>
                    {
                        this.state.todos.map((todo)=>(
                            <li key={todo._id}>
                                {todo.title} : {todo.description}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList