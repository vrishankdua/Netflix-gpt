import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch} from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer=(movieId)=>{
    
      const dispatch=useDispatch();
    
      const getMovieVideos=async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        const json=await data.json();
       
        const trailerItems=json.results.filter((item)=>item?.type==="Trailer")
        const trailer=(trailerItems.length)?trailerItems[0]:json.results[0]
        dispatch(addTrailerVideo(trailer));
        
      }
    
      useEffect(()=>{
        getMovieVideos(movieId)
      },[])  
}
export default useMovieTrailer;