import axios from "axios";
import { getNowPlayingMovies } from "../redux/MovieSlice";
import { useDispatch } from "react-redux";
import { Now_Playing_Movie, options } from "../utils/constant";

export const useNowPlaying = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    try {
      const res = await axios.get(Now_Playing_Movie, options);
      dispatch(getNowPlayingMovies(res.data.results));
    } catch (error) {
      console.error("Error fetching movies:", error.response?.data || error);
    }
  };

  return nowPlaying;
};
