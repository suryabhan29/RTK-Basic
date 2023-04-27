// iske andar createslice method ko call karna pdega

import { createSlice } from "@reduxjs/toolkit";


let initialState={
    value:1000
}

export const addSubSlice = createSlice({
    //1. p:v
    name: 'addSub',
    "initialState":initialState,
    reducers: {
        //1. p:v  will be your actionsNames

        //2. Methods
        addbyone:(state)=>{
            console.log('inside addbyone method');
            console.log('state--->',state);
        },
        reset:()=>{

        },
        subbyone:()=>{

        }
        
    }
});

export const selectCount = (state) => {
        console.log('state---->',state);
       return state.addSubslice.value;
}
export default addSubSlice.reducer;