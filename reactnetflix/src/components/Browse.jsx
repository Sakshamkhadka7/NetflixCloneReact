import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/MovieSlice";
import { useNowPlaying } from "../hooks/useNowPlayingMovies";

const Browse = () => {
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();
  const dispatch=useDispatch();
 

  // My Custom hooks 
  useNowPlaying();
 


  useEffect(()=>{
  if (!user) {
    navigate("/");
  }
   
  },[])


  

  return (
    <div>
      <Header />
      <div>
        <MainContainer/>
        <MovieContainer/>
      </div>
    </div>
  );
};

export default Browse;
