import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
   name:"movie",
   initialState:{
    nowPlayingMovie:null,
    popularMovie:null,
   },
   reducers:{
    getNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovie=action.payload;
    },
    getPopularMOvie:(state,action)=>{
        state.popularMovie=action.payload;
    }
   }

})

export const {getNowPlayingMovies,getPopularMOvie}=movieSlice.actions;
export default movieSlice.reducer; 