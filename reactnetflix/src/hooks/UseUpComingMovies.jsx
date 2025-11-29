import axios from 'axios'
import React from 'react'
import { options, UpComing_Movie } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getUpComingMovie } from '../redux/MovieSlice';

const UseUpComingMovies = () => {
    const dispatch=useDispatch();
  
    const comingMovies=async()=>{
   
       try{
         const res=await axios.get(UpComing_Movie,options);
         dispatch(getUpComingMovie(res.data.results));

       }catch(error){
        console.log(error);
       }
        
   return comingMovies;

    }

}

export default UseUpComingMovies