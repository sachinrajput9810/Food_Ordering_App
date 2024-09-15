import React, { lazy , Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter  , RouterProvider , Outlet} from "react-router-dom"
// import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

const Grocery = lazy(() => import("./components/Grocery") )

const About = lazy(() => import("./components/About") )



const AppLayout = () => {

    // Auth
    const [userName , setUserName] = useState("")

    // useEffect( () => {
    //     // API call
    //     const data = {name : "Sachin Rajput"}
    //     setUserName(data.name)
    // } , [] )


    /** Provider basically provides my react store to my application 
     *  takes the props to srt the store (for eg appStore)
    */

    return (
            <Provider store = {appStore}> 
                {/* <UserContext.Provider value={{Name: userName , setUserName}}>  */}
                    <div className="app">
                        <Header/>
                        <Outlet/>
                    </div> 
                {/* </UserContext.Provider> */}
            </Provider>
    )
}



const appRouter = createBrowserRouter([
    {
        path : "/" ,
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            } ,
            {
                path : "/about", 
                element : <Suspense fallback = { <h1>Loading...</h1>}>
                    <About/>
                </Suspense>
            } ,
            {
                path : "/contact", 
                element : <Contact/>
            } ,
            {
                path : "/restaurant/:id",
                element : <RestaurantMenu/>
            } ,
            {
                path : "/grocery" ,
                element : <Suspense fallback = { <h1>Loading...</h1> }>
                    <Grocery/>
                </Suspense>
            } ,
            {
                path : "/cart" ,
                element : <Cart/>
            }
        ] ,
        errorElement : <Error/>
    } 
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
