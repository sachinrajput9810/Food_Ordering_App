import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"


// app store too contains the reducer which contains  the reducers of all the slices
const appStore = configureStore({
    reducer : {
        cart : cartReducer , 
    }
})

export default appStore