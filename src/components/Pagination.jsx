import React from 'react'

function Pagination({handleprev, handlenext,pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
       <div className='px-8' onClick={handleprev}>
       <i className="fa-solid fa-arrow-left" ></i>
       </div>
       <div className='font-bold'>{pageNo}</div>
        <div className='px-8'  onClick={handlenext}>

        <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Pagination