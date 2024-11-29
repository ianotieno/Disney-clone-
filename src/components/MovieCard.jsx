import React from 'react'

function MovieCard({movie}) {
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";


  return (
    <div>
        <img src={IMAGE_BASE_URL+movie.poster_path } />
    </div>
  )
}

export default MovieCard