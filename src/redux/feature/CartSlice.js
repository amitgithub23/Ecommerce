import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    carts:[]  //empty array
}

//card slice

const cartSlice = createSlice({
    name:'cartslice',
    initialState,
    reducers:{
        //action - add to cart
        addToCart:(state, action)=>{
        //   console.log("action" ,action);

        const ItemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);
        // console.log('ItemIndex', ItemIndex);
        if(ItemIndex >=0){
            state.carts[ItemIndex].qnty +=1;
        }else {
            const temp = {...action.payload,qnty:1}
            state.carts = [...state.carts, temp]
        }

        
        },

        //delete particular item
        removeToCart:(state, action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },

        //remove single item

        removeSingleItem:(state,action)=>{
            const ItemIndex_dec = state.carts.findIndex((item)=>item.id === action.payload.id);
            if(state.carts[ItemIndex_dec].qnty >=1){
                state.carts[ItemIndex_dec].qnty-=1;
            }
        },

        //clear cart
        emptyCartItems:(state, action)=>{
            state.carts = [];
        }
    }
});

export const {addToCart, removeToCart,removeSingleItem, emptyCartItems} = cartSlice.actions;

export default cartSlice.reducer;