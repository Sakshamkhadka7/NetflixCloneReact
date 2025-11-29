import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/MovieSlice";
import { options, Top_Rated_Movies } from "../utils/constant";

const UseTopRatedMovies = () => {

    const dispatch=useDispatch();


  const toprated = async () => {
    try {
      const res = await axios.get(Top_Rated_Movies,options);
      dispatch(getTopRatedMovie(res.data.results));

    } catch (error) {
      console.log(error);
    }

    return toprated;
  };
};

export default UseTopRatedMovies;
