import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addSong, removeSong } from './store';

function Songs() {
    let [a,b]=useState('kl')
    let allSongs=useSelector(state=>state.songs)
// console.log(allSongs)
let dispatch=useDispatch()
        let add=()=> dispatch(addSong(a))
        let remove=(para)=>{
          dispatch(removeSong(para))
        }

  return (
    
    <div>
    
    <h1>Songs</h1>
   <input 
    type="text"
    onChange={e=>b(e.target.value)}
    
   />
   <Button 
   onClick={add} variant="success">add</Button>
  
  { allSongs && allSongs.map((ele,index)=>(
    <div key={index} className='border d-flex justify-content-evenly my-3 align-items-center'>
    <p>{ele}</p>
    <button onClick={()=>remove(ele)} className='btn btn-dark'>x</button>

    </div>
   )
   )}
    </div>
  )
}

export default Songs