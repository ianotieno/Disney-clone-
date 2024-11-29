import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline,  IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';



function MovieList({genreId ,index_}) {
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
      <IoChevronBackOutline className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}
        onClick={()=>sliderLeft(elementRef.current)}/>
        <IoChevronForwardOutline className={`hidden md:block text-white text-[30px] absolute
        cursor-pointer right-0 ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}
        onClick={()=>sliderRight(elementRef.current)}/>

<div className='flex overflow-x-auto gap-8
    scrollbar-none scroll-smooth pt-4 px-3 pb-2' ref={elementRef}>
     {movieGenre.map((item)=>(
       <>
       {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
        </> 
     ))}
    </div>
    </div>
    
  )
}

export default MovieList
