import React from 'react'
import axios from 'axios'

class Rest extends React.Component{
    constructor(){
        super()
        this.state = {
            "loading" : true,
            "users" : []
        }
    }
    componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data)
        this.setState({"users" : response.data})
        this.setState({"loading" : false})
    })
    }
    render(){
        return (
            <div>
                { this.state.loading ? <div>Loading...</div>
                : <div>
                    {
                        this.state.users.map((user)=>{
                            return (
                                <div>
                                    <span>{user.name}</span>
                                    
                                    &nbsp;

                                    <span>{user.phone}</span>
                                    
                                    &nbsp;
                                    
                                    <span>{user.email}</span>
                                </div>
                            )
                        })
                    }
                </div>
            }
            </div>
        )
    }
}
export default Rest