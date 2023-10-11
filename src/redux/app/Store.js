import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../feature/CartSlice";

//create store

export const store = configureStore({
    reducer:{
        allCart:CartSlice
    }
})

