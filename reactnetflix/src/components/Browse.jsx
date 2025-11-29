import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import { useNowPlaying } from "../hooks/useNowPlayingMovies";
import UsePopularMovies from "../hooks/UsePopularMovies";
import UseTopRatedMovies from "../hooks/UseTopRatedMovies";
import UseUpComingMovies from "../hooks/UseUpComingMovies";

const Browse = () => {
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();
  const dispatch=useDispatch();
 

  // My Custom hooks 
  useNowPlaying();
  UsePopularMovies(); 
  UseTopRatedMovies();
  UseUpComingMovies();


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
