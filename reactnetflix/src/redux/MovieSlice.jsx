import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
   name:"movie",
   initialState:{
    nowPlayingMovie:null,
   },
   reducers:{
    getNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovie=action.payload;
    }
   }

})

export const {getNowPlayingMovies}=movieSlice.actions;
export default movieSlice.reducer; 