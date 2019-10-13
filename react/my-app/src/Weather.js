import React from 'react'
import axios from 'axios'
class Weather extends React.Component{
    constructor(){
        super()
        this.state = {
            "latitude" : "",
            "longitude" : ""
        }
    }

    onLatChange = (event) =>{
        this.setState({
            "latitude" : event.target.value
        })
    }

    onLongChange = (event) =>{
        this.setState({
            "longitude" : event.target.value
        })
    }

    handleClick = () => {
        let url = "https://api.darksky.net/forecast/5299117f1421deae5378b4f3207da78c/"
        url = url + this.state.latitude + "," + this.state.longitude
        axios.get(url)
        .then((response)=>{
            console.log(response.data)
        })
    }
    render(){
        return(
        <div>
            <label>latitude</label>
            <input onChange={this.onLatChange} type="text"></input>

            <label>longitude</label>
            <input onChange={this.onLongChange} type="text"></input>
            <button onClick={this.handleClick}>Submit</button>
        </div>
        )
    }
}

export default Weather