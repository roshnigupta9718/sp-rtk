

import React, { useState } from 'react'
import { Button, CloseButton} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie } from './store';




function Movie() {
    let [a,b]=useState('titanic')
    let allmovies=useSelector(state=>state.movies)
    console.log(allmovies)
    let dispatch=useDispatch()
   
   let add=()=>{ dispatch(addMovie(a))}
   let remove=(ele)=>{
    dispatch(removeMovie(ele))
   }
  return (
    <div><h1>Movie</h1>
    <input type="text" value={a}
        onChange={(e)=>b(e.target.value)}
    />
    <Button  
    onClick={add}
    variant="success">add</Button>
   
   
    { allmovies && allmovies.map((ele,index)=>(
    <div key={index} className='border d-flex justify-content-evenly my-3 align-items-center'>
    <p>{ele} </p>
<button onClick={()=>remove(ele)} className='btn btn-dark'>x</button>
</div>
   )
   )}
   </div>
  )
}

export default Movie