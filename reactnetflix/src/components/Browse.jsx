import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";

const Browse = () => {
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();
 
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
