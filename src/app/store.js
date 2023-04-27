// Import area
import { configureStore } from "@reduxjs/toolkit";
import addSubReducer from "../features/addsub/addSubSlice";


export const store = configureStore({
    //1 p:v
    //2 Methods
    reducer:{
        //1 p:v

        //2 Methods
        addSubslice:addSubReducer,
    }
});