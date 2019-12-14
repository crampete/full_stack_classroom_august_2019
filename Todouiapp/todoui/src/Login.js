import React from 'react'
import axios from "axios"

class Login extends React.Component{
        constructor(){
        super()
        this.state={
            email  : "",
            password : "",
            loginFailed :  false
        }
    }
    onEmailChange = (event) =>{
        this.setState({email : event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({password : event.target.value})
    }
    onSubmit = (event) =>{
        if(!this.state.password || !this.state.email)
            return

        axios.post("http://localhost:8000/user/signin",{
            email : this.state.email,
            password :this.state.password
        }).then((res)=>{
            console.log(res.data)
            localStorage.setItem("token", res.data.token); 
            this.props.updateEmail(this.state.email)
           this.props.history.push("/todo")
           
           

        }).catch((err)=>{
            this.setState({loginFailed : true})
            console.log(err)
        })
    }

    render(){
        return(
        <div>
            <div className="row">
                <div className="col-md-4 offset-md-4 ">
                    <h4>Login</h4>
                </div>
            </div>

            <div className="row">
                {   this.state.loginFailed &&
                    <div className="col-md-4 offset-md-4 ">
                        <div className="alert alert-danger" role="alert">
                        Invalid login credentials
                        </div>
                    </div>
                }   

            </div>


            <div className="row">
                              
                <div className="col-md-4 offset-md-4 col-sm-12">
                    <div>
                        <div className="form-group">
                            <label>Email </label>
                            <input className="form-control" type="text" onChange={this.onEmailChange}></input>
                        </div>

                        <div className="form-group">
                        <label>Password </label>
                        <input className="form-control" type="password" onChange={this.onPasswordChange}></input>
                        </div>
                        <button className="btn btn-outline-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>



           
           
        </div>
        )
    }
}

export default Login