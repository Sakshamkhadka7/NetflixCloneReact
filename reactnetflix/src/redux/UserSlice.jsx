import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;