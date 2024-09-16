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
    // console.log(cartItems)

    const handleSelect = () => {

    }

    return (
        <div className="flex justify-between bg-gradient-to-r from-orange-200 to-orange-600 shadow-2xl  rounded-md">

            <div className="">
              <img className="transition-transform duration-500 hover:rotate-360 w-32 rounded-full  " src={LOGO_URL} alt="eeewwe" />
            </div> 

            <div className="flex items-center">
                <ul className="flex p-4 m-2 text-lg text-white font-semibold">
                    <li className="px-3"> Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
                    <button className="px-3 font-bold  hover:text-black hover:border-b-2"  > <Link to = "/"> Home </Link> </button>
                    <button className="px-3 font-bold  hover:text-black hover:border-b-2" > <Link to = "/about"> About Us </Link> </button>
                    <button className="px-3 font-bold  hover:text-black hover:border-b-2" >  <Link to = "/contact"> Help and Support </Link> </button>
                    <button className="px-3 font-bold  hover:text-black hover:border-b-2"> <Link to = "/cart"> Cart ({cartItems.length} items) </Link>    </button>
                    <button className="login-btn " onClick={ () => { 
                        text === "Login" ? setText("Logout") : setText("Login")
                    }} >{text}</button>
                    
                    <li className="px-3" >{Name}</li>
                </ul>
              </div>
        </div>
    )
}

export default Header ;