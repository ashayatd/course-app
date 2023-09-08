import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[],
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocart:(state)=>{
            
        },
        deleteFromcart:(state)=>{

        },
    },
})

export const {addTocart,deleteFromcart } = cartSlice.actions
export default cartSlice.reducer
