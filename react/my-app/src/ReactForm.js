import React from 'react'
import axios from 'axios'

class ReactForm extends React.Component{
    constructor(){
        super()
        this.state = {
            "name" : "",
            "phonenumber" : ""
        }

    }
    handleClick = (e) => {
        if(this.state.phonenumber.length == 10)
        {
            let authKey = ""
            let url = "https://api.msg91.com/"+
            "api/sendhttp.php?mobiles="+
            this.state.phonenumber+
            "&authkey="+authKey+
            "route=4&sender=TESTIN&message="+
            this.state.name+"&country=91"

            axios.get(url)
            .then((response)=>{
                console.log(response.data)
            })
        }
        else
            console.log(this.state.phonenumber+" is not valid")
    }
    handleChange = (event) =>{
        this.setState({"name" : event.target.value})
    }

    onChangeNumber = (event) =>{
        this.setState({
            "phonenumber" : event.target.value
        })
    }
    render(){
        return (
        <div>
            <div>
                <label>Enter your name </label>
                <input onChange={this.handleChange} type="text"></input>

                <br></br>
                <label>Enter your number</label>
                <input onChange={this.onChangeNumber} type="text"></input>
                
                <button onClick={this.handleClick} type="submit">Submit</button>

            </div>
        </div>)
    }
}

export default ReactForm