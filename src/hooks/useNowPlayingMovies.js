import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import {API} from "../utils/constants"
import { options } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{

    const dispatch=useDispatch();
    const getNowPlayingMovies= async()=>{
        const data=await fetch(API, options)
        const json=await data.json();
        
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

  export default useNowPlayingMovies
