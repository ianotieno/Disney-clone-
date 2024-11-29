import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="f78657d91cff505289aaece483df7cde"

//https://api.themoviedb.org/3/trending/all/day?api_key=f78657d91cff505289aaece483df7cde
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=f78657d91cff505289aaece483df7cde';


const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key=" +api_key )
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}