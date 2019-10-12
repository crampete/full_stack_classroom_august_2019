import React from 'react'
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import Student from "./Student"
import Counter from "./Counter"
import LifeCycleMethod from './LifeCycleMethod';
import Rest from './Rest';

function RouterComponent(){
    return(
            <Router>
                <Link to="/student"> Student </Link><br></br>
                <Link to="/counter"> Counter </Link>

                <Route to="/rest" component={Rest}></Route>
                <Route path="/life" component={LifeCycleMethod}></Route>
                <Route path="/" exact component={Counter}></Route>
                <Route path="/student" component={Student}></Route>
                <Route path="/counter" component={Counter}></Route>
            </Router>
    )
}

export default RouterComponent