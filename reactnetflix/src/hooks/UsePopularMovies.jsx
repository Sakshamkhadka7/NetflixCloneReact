import axios from "axios";
import React from "react";
import { options, Popular_Movie } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getPopularMOvie } from "../redux/MovieSlice";

const UsePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovie = async () => {
    try {
      const res = await axios.get(Popular_Movie, options);
      dispatch(getPopularMOvie(res.data.results));
    } catch (error) {
      console.log(error);
    }

    return popularMovie;
  };
};

export default UsePopularMovies;
