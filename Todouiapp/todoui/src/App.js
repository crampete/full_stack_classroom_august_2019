import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Login"
import TodoList from "./TodoList"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/todo">
            <TodoList />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
