import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import axios from "axios";
import { Now_Playing_Movie, options } from "../utils/constant";

const Browse = () => {
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();
 
 const nowPlaying = async () => {
  try {
    const res = await axios.get(Now_Playing_Movie, options);
    console.log("Movies: ", res.data);
  } catch (error) {
    console.error("Error fetching movies:", error.response?.data || error);
  }
};


  useEffect(()=>{
  if (!user) {
    navigate("/");
  }

  nowPlaying();
   
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
