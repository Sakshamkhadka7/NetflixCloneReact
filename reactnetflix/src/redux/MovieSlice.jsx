import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
   name:"movie",
   initialState:{
    nowPlayingMovie:null,
    popularMovie:null,
    topRatedMovie:null,
    upcomingMovies:null,
   },
   reducers:{
    getNowPlayingMovies:(state,action)=>{
        state.nowPlayingMovie=action.payload;
    },
    getPopularMOvie:(state,action)=>{
        state.popularMovie=action.payload;
    },
    getTopRatedMovie:(state,action)=>{
        state.topRatedMovie=action.payload;
    },
    getUpComingMovie:(state,action)=>{
        state.upcomingMovies=action.payload;
    }

   }

})

export const {getNowPlayingMovies,getPopularMOvie,getTopRatedMovie,getUpComingMovie}=movieSlice.actions;
export default movieSlice.reducer; 