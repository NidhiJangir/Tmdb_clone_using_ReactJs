import React from 'react'
import Logo from '../images/Logo.png';

//to avoid reloading of our components we use <Link> in place of <a>
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className="w-[50px]" src={Logo} alt="" />
        <Link className='text-blue-900 text-3xl font-bold' to="/">Home</Link>
        <Link className='text-blue-900 text-3xl font-bold' to="/watchlist">Watchlist</Link>
        
    </div>
   

  
  )
}

export default Navbar
