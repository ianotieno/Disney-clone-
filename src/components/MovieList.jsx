import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronDownOutline, IoChevronForwardOutline } from 'react-icons/io5';



function MovieList({genreId}) {
  const screenWidth=window.innerWidth;
  const elementRef=useRef();
useEffect(()=>{getMovieByGenreId()},[]);
const [movieGenre ,setMovieGenre]= useState([])
const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then((res)=>{
            console.log(res.data.results)
            setMovieGenre(res.data.results)
        })
    }
    const sliderRight=(element)=>{
      element.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(element)=>{
      element.scrollLeft-=screenWidth-110
  }


  return (
    <div>
      <IoChevronBackOutline className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer " 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <IoChevronForwardOutline className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0' 
        onClick={()=>sliderRight(elementRef.current)}/>

<div className='flex overflow-x-auto gap-8
    scrollbar-none scroll-smooth pt-4 px-3 pb-4' ref={elementRef}>
     {movieGenre.map((item,index)=>(
       <MovieCard movie={item} />
     ))}
    </div>
    </div>
    
  )
}

export default MovieList
