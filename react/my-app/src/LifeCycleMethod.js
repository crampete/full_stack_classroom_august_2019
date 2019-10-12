import React from 'react'

class LifeCycleMethod extends React.Component{
    constructor(){
        super()
        this.state = {
            "loading" : true
        }
    }
    componentDidMount(){
        console.log("Component did mount")
        setTimeout(() =>{ this.setState({"loading" : false}) }, 3000)
    }   

    render(){
        console.log("Render function is called")
        return (
            <div>
                <div>
                <p>With AND operator</p>
                { 
                    this.state.loading && <div>Loading...</div>
                }
                {
                    !this.state.loading &&
                    <div> Loaded</div>
                }

                <p>With Ternary operator</p>
                {
                    this.state.loading ? <div>Loading...</div> : <div>Loaded</div> 
                }
                
                </div>
            </div>
        )
    }
}

export default LifeCycleMethod