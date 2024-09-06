import {LOGO_URL} from "../utils/constant" 

let Header = () => {
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
                </ul>
              </div>
        </div>
    )
}

export default Header ;