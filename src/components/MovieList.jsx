import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';



function MovieList({genreId}) {
useEffect(()=>{getMovieByGenreId()},[]);
const [movieGenre ,setMovieGenre]= useState([])
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then((res)=>{
            console.log(res.data.results)
            setMovieGenre(res.data.results)
        })
    }
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
     {movieGenre.map((item,index)=>(
       <MovieCard movie={item} />
     ))}
    </div>
  )
}

export default MovieList
