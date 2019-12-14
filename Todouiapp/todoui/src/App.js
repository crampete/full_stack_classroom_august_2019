import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Login"
import TodoList from "./TodoList"
import { createBrowserHistory } from "history";
import CreateTodo from './CreateTodo';
import axios from 'axios'

const customHistory = createBrowserHistory();

class App extends React.Component{
  constructor(){
    super()
    this.state = {email : ""}
  }
  
  componentWillMount(){
    let token = localStorage.getItem("token")
    axios.get("http://localhost:8000/user/me",{
            headers : {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
           this.setState({email : res.data.email})
        })
  }

  updateEmail = (value) => {
    this.setState({email : value})
  }

  logout = ()=>{
    let token = localStorage.getItem("token")
    axios.post("http://localhost:8000/user/logout",{},{
            headers : {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
           localStorage.removeItem("token")
           customHistory.push("/login")
        })
  }

  render(){
  return (
    <div>
    <nav className="navbar text-light bg-dark">
      <a className="navbar-brand text-light" href="#">Todo App</a>
      <div className="form-inline">
        {this.state.email}
        <button onClick={this.logout} className="btn btn-default text-light">Logout</button>
       </div>
    </nav>
    <Router history={customHistory} >
      <div>
        <Switch>
          <Route path="/login">
            <Login history={customHistory} updateEmail = {this.updateEmail} />
          </Route>
          <Route path="/todo">
            <TodoList history={customHistory}/>
          </Route>

          <Route path="/create-todo">
            <CreateTodo history={customHistory}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    
  )
  }
}

export default App;
