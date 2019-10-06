import React from "react"
import CounterDisplay from './CounterDisplay'
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            "counter" : 0,
        }
    }

    handleClick = () => {
        this.setState({ "counter" : this.state.counter +  1})
    }

    handlePrevClick = () => {
        if(this.state.counter > 0)
            this.setState({ "counter" : this.state.counter - 1})
    }

    resetCount = () =>{
        this.setState({"counter" :  0})
    }

    render(){
        return (
            <div>
                
                <CounterDisplay reset={this.resetCount} count={this.state.counter}></CounterDisplay>
                <button onClick={this.handleClick} >Next Value</button>
                <button onClick={this.handlePrevClick} >Previos Value</button>
            </div>
        )
    }
}

export default Counter