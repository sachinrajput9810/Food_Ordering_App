import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props)
        // console.log("parent constructor")
    }

    render(){
        // console.log("parent render")
        return (
            <div className="about">
                <h2>About Us page</h2>
                <h2>All the details of Namaste React</h2>
                <UserClass name = {"First "} location = {"Ghaziabad"} email = {"rajputsachin9313@gmail.com"} />
            </div>
        )
    }

    componentDidMount(){
        // console.log("parent component did mount")
    }
    

}




export default About;



