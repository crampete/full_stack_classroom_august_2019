import React from 'react'
import { BrowserRouter as Router , Route } from "react-router-dom";

import Weather from './Weather';

function RouterComponent(){
    return(
            <Router>
                

                <Route to="/weather" component={Weather}></Route>

    
            </Router>
    )
}

export default RouterComponent