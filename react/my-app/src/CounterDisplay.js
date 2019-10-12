import React from 'react'

class CounterDisplay extends React.Component{
    constructor(){
        super()
    }

    reset = () =>{
        this.props.reset()
    }

    render(){
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default CounterDisplay