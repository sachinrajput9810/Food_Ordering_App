import { useState } from "react"
function User({name}) {

    const [count , setCount] = useState(0)
    const [count2 , setCount2] = useState(2)

    return (
        <div className="user-card">
            <h2>Count2 : {count2}</h2>
            <h2>Count : {count}</h2>
            <h2>name : {name}</h2>
            <h4>Location : Ghaziabad</h4>
            <h4>Email : rajputsachin9313@gmail.com</h4>
        </div>
    )
}

export default User