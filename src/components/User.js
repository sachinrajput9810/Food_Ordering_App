import { useState } from "react"
function User({name}) {

    

    return (
        <div className="user-card m-4 p-4 bg-slate-500">
            <h2>name : {name}</h2>
            <h4>Location : Ghaziabad</h4>
            <h4>Email : rajputsachin9313@gmail.com</h4>
        </div>
    )
}

export default User