import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies=()=>{

    const dispatch=useDispatch();
    const getPopularMovies= async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const json=await data.json();
        
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        getPopularMovies();
    },[])
}

  export default usePopularMovies;
