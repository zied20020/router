import React from 'react'
import Cardd from './Cardd'

const MovieList = ({moviesList,nameSearch, ratingSearch}) => {
    return (
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"nowrap", width:"100%" }}>
            
                 {moviesList
                    .filter(
                      (movie) =>
                        movie.Title.toUpperCase().includes(
                          nameSearch.toUpperCase().trim()
                        ) && movie.Rate >= ratingSearch
                    )
                    .map((movie, i) => (
                      <Cardd key={i} movie={movie} />
                    ))}
        
        </div>
    )
}
export default MovieList