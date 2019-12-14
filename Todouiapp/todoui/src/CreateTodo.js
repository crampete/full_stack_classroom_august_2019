import React from 'react'
import axios from 'axios'

class CreateTodo extends React.Component{
    constructor(){
        super()
        this.state={
            title: "" ,
            description : ""
        }
    }

    onChangeTitle = (e) =>{
        this.setState({title : e.target.value})
    }

    onChangeDescription = (e) =>{
        this.setState({description : e.target.value})
    }

    onSubmit = () =>{
        let token = localStorage.getItem("token")
        axios.post("http://localhost:8000/todo",
        {
            title : this.state.title,
            description : this.state.description
        },{
            headers : {
                Authorization: "Bearer " + token
            }
        }).then((res)=>{
            this.props.history.push("/todo")
        })
    }

    render = ()=>{
        return(
            <div>
                 <div className="row">
                <div className="col-md-4 offset-md-4 ">
                    <h4>Create Todo</h4>
                </div>
            </div>
                 <div className="row">
                              
                              <div className="col-md-4 offset-md-4 col-sm-12">
                                  <div>
                                      <div className="form-group">
                                          <label>Title </label>
                                          <input className="form-control" type="text" onChange={this.onChangeTitle}></input>
                                      </div>
              
                                      <div className="form-group">
                                      <label>Description </label>
                                      <input className="form-control" type="text" onChange={this.onChangeDescription}></input>
                                      </div>
                                      <button className="btn btn-outline-primary" onClick={this.onSubmit}>Submit</button>
                                  </div>
                              </div>
                          </div>
              
            </div>
        )
    }
}

export default CreateTodo