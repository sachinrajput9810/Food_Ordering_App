import {LOGO_URL} from "../utils/constant" 
import { useState , useEffect } from "react"; 



let Header = () => {

    console.log("Header Rendered") 

    const [text , setText] = useState("Login")
    useEffect(() => {
        console.log("Use effect called")
    }  , [text])


    return (
        <div className="header">

            <div className="logo-container">
              <img className="logo" src={LOGO_URL} alt="eeewwe" />
            </div> 

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={ () => { 
                        text === "Login" ? setText("Logout") : setText("Login")
                    }} >{text}</button>
                </ul>
              </div>
        </div>
    )
}

export default Header ;