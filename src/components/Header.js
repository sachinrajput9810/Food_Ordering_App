import {LOGO_URL} from "../utils/constant" 
import { useContext, useState  } from "react"; 
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
 

let Header = () => {

    
    
    const {Name } = useContext(UserContext)

    // console.log("Header Rendered") 

    const [text , setText] = useState("Login")
    // useEffect(() => {
        // console.log("Use effect called")
    // }  , [text])
    const onlineStatus = useOnlineStatus()

    const cartItems = useSelector( (store) => store.cart.items )
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-gradient-to-r from-orange-200 to-orange-600 shadow-2xl  rounded-md">

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
                    <li className="px-4 font-bold"> <Link to = "/cart"> Cart ({cartItems.length} items) </Link>    </li>
                    <button className="login-btn px-4" onClick={ () => { 
                        text === "Login" ? setText("Logout") : setText("Login")
                    }} >{text}</button>
                    
                    <li>{Name}</li>
                </ul>
              </div>
        </div>
    )
}

export default Header ;