import React from 'react'
import Songs from './Songs'
import Movie from './Movie'
import { useDispatch } from 'react-redux'
import { reset } from './store'

function Main1() {
  let dispatch=useDispatch()

  return (
    <div>
    <button 
    onClick={()=>dispatch(reset())}
    className='btn btn-warning d-block w-75 my-4 p-3 fs-3 text-light m-auto'>reset

    </button>
    <div className='d-flex justify-content-between'
    >

    <Songs/>
    <Movie/></div>
    
    
    </div>
  )
}

export default Main1