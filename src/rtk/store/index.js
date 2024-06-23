import { configureStore, createSlice } from "@reduxjs/toolkit";

let songSlice=createSlice({
    name:'song',
    initialState:[],
    reducers:{
        addSong(state,action){
            state.push(action.payload)
        },
        removeSong(state,action){
         console.log(action.payload)
         let getIndex=state.indexOf(action.payload)
         console.log(getIndex)
         state.splice(getIndex,1)
        },
        reset(){
            return []
        }
         

    }
})
let movieSlice=createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        addMovie(state,action){
            state.push(action.payload)
        },
        removeMovie(state,action){
            console.log(action.payload)
            let getIndex=state.indexOf(action.payload)
            console.log(getIndex)
            state.splice(getIndex,1)
           }
        },
        extraReducers(builder){
        builder.addCase('song/reset',()=>{
            return []
        })
         

    }
})
export const store=configureStore({
 reducer:{
    songs:songSlice.reducer,
    movies:movieSlice.reducer
 }   
})

export const {addSong,removeSong,reset}=songSlice.actions
export const {addMovie,removeMovie}=movieSlice.actions

console.log(store);

// console.log(store.getState())
// store.dispatch({type:'song/addSong',payload:'mohitchauhan'})
// store.dispatch({type:'movie/addMovie',payload:'jadu'})

console.log(store.getState());