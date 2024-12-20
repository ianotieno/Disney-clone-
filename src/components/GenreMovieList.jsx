import React from "react";
import GenreList from "../constant/GenreList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="">
      {GenreList.genere.map(
        (item, index) =>
          index <= 6 && (
            <div key={index} className="p-2 px-8  md:px-8">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id } index_={index}/>
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
