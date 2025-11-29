export const API_END_POINT="http://localhost:8080/api/v1/user";
export const Now_Playing_Movie =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGNlMWVjM2Q1ZDgwOGU2MTkwMGEwODQ1MDAyYzRkZCIsIm5iZiI6MTc2NDM0Mzg2OS4zMTksInN1YiI6IjY5MjljMDNkNGE5Y2FjNWQyMTI0NWZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vrjNXM4XP9mWtuz2ybaP5fPrmIRYFB7uoUpRT4Wh554'
  }
};


export const Popular_Movie="https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies="https://api.themoviedb.org/3/movie/top_rated";
export const UpComing_Movie="https://api.themoviedb.org/3/movie/upcoming";
