import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';
function Movies({handleAddToWatchlist,handleRemoveFromWatchlist,watchlist}){

  const [movies, setMovies]=useState([]);
  const [pageNo, setPageNo]=useState(1);

  const handleprev = () =>{
    if(pageNo===1){
      setPageNo(1);
    }
    else{
      setPageNo(pageNo-1);
    }
    
  }
  const handlenext = () =>{
    setPageNo(pageNo+1);
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fce67d7d09ae2c4e0494890c3c855151&language=en-US&page=${pageNo}`).then(function (res) {
      
    console.log(res.data.results);
    setMovies(res.data.results);
    })
  }, [pageNo])

  return (
    
    <div className='p-3'>
      <div className='text-2xl m-10 font-bold text-center '>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
      
       {movies.map((movieObj) =>{
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
       })}
       
       
      </div>
      <Pagination pageNo={pageNo} handleprev={handleprev} handlenext={handlenext} />
    </div>
   
  )
}

export default Movies



//https://api.themoviedb.org/3/movie/popular?api_key=fce67d7d09ae2c4e0494890c3c855151&language=en-US&page=1