import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";

function App() {
let [watchlist,setWatchlist]=useState([]);
  let handleAddToWatchlist = (movieObj) =>{
      let newWatchlist =[...watchlist, movieObj]
      localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
      setWatchlist(newWatchlist);
      console.log(newWatchlist);
  }
  let handleRemoveFromWatchlist=(movieObj)=>{
    let filteredWatchlist= watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    setWatchlist(filteredWatchlist)
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchlist))

  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return 
    }
   setWatchlist(JSON.parse(moviesFromLocalStorage)) 
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
