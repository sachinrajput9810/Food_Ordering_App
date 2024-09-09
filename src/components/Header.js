import {LOGO_URL} from "../utils/constant" 
import { useState  } from "react"; 
import {Link} from "react-router-dom"
 

let Header = () => {

    // console.log("Header Rendered") 

    const [text , setText] = useState("Login")
    // useEffect(() => {
        // console.log("Use effect called")
    // }  , [text])


    return (
        <div className="header">

            <div className="logo-container">
              <img className="logo" src={LOGO_URL} alt="eeewwe" />
            </div> 

            <div className="nav-items">
                <ul>
                    <li> <Link to = "/"> Home </Link> </li>
                    <li> <Link to = "/about"> About Us </Link> </li>
                    <li> <Link to = "/contact"> Contact Us </Link> </li>
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