import React from "react"

class UserClass extends React.Component{


    constructor(props){
        super(props)
        // console.log(this.props.name +  "child constructor")
        // this.state contains all the state within the class based component
        this.state = {
            userInfo : {
                name : "Dummy" ,
                bio : "Cosmos" ,
                location : "World" ,
            }
        }
    }
    render(){
        // console.log(this.props.name +  "child render")

        const {name, location , bio  , avatar_url} = this.state.userInfo
        
        return (
        <div className="user-card m-4 w-86  flex  p-4 bg-slate-400">
            <img className="avatar w-40 rounded-full" src={avatar_url} alt="" />
            <div className="justify-center">
                <h2>Name :{name}</h2>
                <h4>Location : {location} </h4>
                <h4>Bio : {bio} </h4>
            </div>
        </div>
        )
    }

    async componentDidMount(){
        // console.log(this.props.name +  "child component did mounted")
        const data = await fetch("https://api.github.com/users/sachinrajput9810")
        const json = await data.json()
        this.setState({
            userInfo : json
        })
        // console.log(json)
    }

    componentDidUpdate(){
        // console.log("component did update")
    }

    componentWillUnmount(){
        // console.log("Component will unmount")
    }
}

export default UserClass;