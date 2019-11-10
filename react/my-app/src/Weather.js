import React from 'react'
import axios from 'axios'
class Weather extends React.Component{
    constructor(){
        super()
        this.state = {
          "place" : "",
          "temperature" : 0
        }
    }

    onPlaceChange = (event) =>{
        this.setState({
            "place" : event.target.value
        })
    }

    handleClick = () => {
        let url = "http://localhost:8000/temperature"
        axios.post(url, {"place" : this.state.place})
        .then((response)=>{
            console.log(response.data.temperature)
            this.setState({"temperature" : response.data.temperature})
        })
    }
    render(){
        return(
        <div>
            <h1>Temperature of {this.state.place} is {this.state.temperature}</h1>
            <label>Place</label>
            <input onChange={this.onPlaceChange} type="text"></input>

            <button onClick={this.handleClick}>Submit</button>
        </div>
        )
    }
}

export default Weather