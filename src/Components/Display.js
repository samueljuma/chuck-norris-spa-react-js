import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
 function Display(props){

    const {category} = useParams()
    const [joke, setJoke] = useState(null)

    const url = `https://api.chucknorris.io/jokes/random?category=${category}`

    let content = null
        
    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setJoke(response.data)
        })
    },[url])

    if(joke){
        content = 
        <div className="items-center">
            <h1>
               {joke.value} 
            </h1>
            <h2>
                {joke.created_at}
            </h2>
            {/* <image src={joke.img} alt="img" /> */}
        </div>
    }
     return(
         <div className='mt-20 fixed bg-white top-0 right-0 w-4/5 h-full shadow p-3'>
            {content}
         </div>
     )
 }
 //mt-20 fixed bg-white top-0 left-0 w-1/5 h-1/2 z-50 shadow p-3
 export default Display