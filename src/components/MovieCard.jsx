import React from 'react'

function MovieCard({poster_path, name,movieObj, handleAddToWatchlist, handleRemoveFromWatchlist,watchlist}) {
  
  function doesContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id==movieObj.id){
        return true;
      }
    }
    return false;
  }

  return (
<div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
    {doesContain(movieObj)?
    (<div onClick={()=>{handleRemoveFromWatchlist(movieObj)}} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
      &#x274c;
    </div>):
(<div onClick={()=>{handleAddToWatchlist(movieObj)}} className='m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
 &#128525;
  </div>)}

<div className='text-white text-xl w-full text-center p-2 bg-gray-950/60 '>
  {name}
  </div>
    </div>
  )
}


export default MovieCard