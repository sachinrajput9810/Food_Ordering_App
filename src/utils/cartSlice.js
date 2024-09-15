import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart" ,

    initialState : {
        items : [] ,
    } ,

    reducers : {
        // do not mutate the state
        // redux toolkit uses immer js behind the scene
        addItem : (state , action) => {
            state.items.push(action.payload)
        } ,
        removeItem : (state , action) => {
            state.items.pop()
        } ,
        clearCart : (state , action) => {
            state.items = []
        }
    }

})

// console.log(cartSlice.reducer)

export const {addItem , removeItem , clearCart} = cartSlice.actions // cartSlice.actions is the object that contains all the actions 

export default cartSlice.reducer 

