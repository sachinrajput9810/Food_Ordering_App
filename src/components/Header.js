import {LOGO_URL} from "../utils/constant" 
import { useState  } from "react"; 
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
 

let Header = () => {

    // console.log("Header Rendered") 

    const [text , setText] = useState("Login")
    // useEffect(() => {
        // console.log("Use effect called")
    // }  , [text])
    const onlineStatus = useOnlineStatus()


    return (
        <div className="flex justify-between bg-orange-300 shadow-2xl  rounded-md">

            <div className="">
              <img className="transition-transform duration-500 hover:rotate-360 w-32 rounded-full  " src={LOGO_URL} alt="eeewwe" />
            </div> 

            <div className="flex items-center">
                <ul className="flex p-4 m-2">
                    <li className="px-4"> Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
                    <li className="px-4"> <Link to = "/"> Home </Link> </li>
                    <li className="px-4"> <Link to = "/about"> About Us </Link> </li>
                    <li className="px-4"> <Link to = "/contact"> Contact Us </Link> </li>
                    <li className="px-4"> <Link to = "/grocery"> Grocery </Link> </li>
                    <li>Cart</li>
                    <button className="login-btn px-4" onClick={ () => { 
                        text === "Login" ? setText("Logout") : setText("Login")
                    }} >{text}</button>
                </ul>
              </div>
        </div>
    )
}

export default Header ;