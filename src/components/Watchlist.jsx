import React, { useEffect, useState } from 'react'
import genreIds from '../utility/genre'
function Watchlist({watchlist,setWatchList,handleRemoveFromWatchlist} ) {

  const [search,setSearch]=useState('');
  const [geneList,setGenrelist]=useState(['All Genres']);
  const [currGenre,setCurrGenre]=useState('All Genres');
  
  let handleSearch = (e) =>{
      setSearch(e.target.value)
  }

  let handleFilter = (genre) =>{
    setCurrGenre(genre);
  }

  let sortIncreasing=()=>{
     let sortedInc = watchlist.sort((movieA,movieB)=>{
        return movieA.vote_average - movieB.vote_average
      })
      
      setWatchList([...sortedInc])
  }

  let sortDecreasing=()=>{
    let sortedDec = watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
   
    setWatchList([...sortedDec])
  }

  let sortIncreasingp=()=>{
    let sortedPopInc = watchlist.sort((popA,popB)=>{
      return popA.popularity - popB.popularity
    })
    setWatchList([...sortedPopInc])
  }

  let sortDecreasingp=()=>{
    let sortedPopDec = watchlist.sort((popA,popB)=>{
      return popB.popularity - popA.popularity
    })
    setWatchList([...sortedPopDec])
  }

  useEffect(()=>{

      let temp= watchlist.map((movieObj)=>{
        return genreIds[movieObj.genre_ids[0]]
      })
      temp= new Set(temp);
      setGenrelist(['All Genres' , ...temp])
      console.log(temp);
  },[watchlist])


  return (
    <>
<div className='flex justify-center flex-wrap m-4  cursor-pointer'>
  {geneList.map((genre)=>{
    return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre ?'flex justify-center bg-blue-900 h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4 my-1': 'flex justify-center my-1 bg-gray-500 h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4' }>
    {genre}
  </div>

  })}

</div>

    <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type="text" className='h-[3rem] w-[18rem] bg-gray-900 outline-none px-4' placeholder='Search Movie'/> 
    </div>
    <div className=' overflow-hidden rounded-lg border border-gray-400 m-8'>
<table className='w-full text-gray-700 text-center cursor-pointer'>
  <thead className='border-b-2'>
    <tr>
      <th>Name</th>
      <th  >
     <div className='flex justify-center'>
      <div  onClick={sortIncreasing} className='p-2'><i className="fa-solid fa-arrow-up"></i></div>
      <div className='p-2'>Ratings</div>
      <div onClick={sortDecreasing} className='p-2'><i className="fa-solid fa-arrow-down"></i></div>
      </div></th>
        
        <th>
          <div  className='flex justify-center'>
     <div  onClick={sortIncreasingp} className='p-2 '><i className="fa-solid fa-arrow-up"></i></div>
     <div className='p-2 '>Popularity</div>
     <div onClick={sortDecreasingp} className='p-2 '><i className="fa-solid fa-arrow-down"></i></div>
     </div></th>
      
      <th>Genre</th>
    </tr>
  </thead>
  <tbody>
    {watchlist.filter((movieObj)=>{
        if(currGenre=='All Genres'){
          return true
        }
        else{
            return genreIds[movieObj.genre_ids[0]]==currGenre;
        }
    }).filter((movieObj)=>{
      return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
    }).map((movieObj)=>{
      return <tr className='border-b-2'>
       <td className='flex items-center px-6 py-4 '>
         <img className='h-[6rem] w-[10rem] ' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
       <div className='mx-10'>{movieObj.title}</div>
       </td>
       <td>
        {movieObj.vote_average}
       </td>
       <td>{movieObj.popularity}</td>
       <td>{genreIds[movieObj.genre_ids[0]]}</td>
       <td onClick={()=>handleRemoveFromWatchlist(movieObj)} className='text-red-500 cursor-pointer'>Delete</td>
       
     </tr>
    })}
   
    
  </tbody>
</table>

    </div>
    </>
  )
}

export default Watchlist