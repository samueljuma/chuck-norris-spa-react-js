import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'
 function Display(props){

    const {category} = useParams() // gets category from the url parameters
    const [joke, setJoke] = useState({
        loading: false,
        data:null,
        error: false
    }) 

    const url = `https://api.chucknorris.io/jokes/random?category=${category}`

    let content = null
        
    useEffect(()=>{
        // initial
        setJoke({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setJoke({
                loading:false,
                data: response.data,
                error: false
            })       
        })
        .catch(errors =>{
            setJoke({
               loading: false,
               data: null,
               error: true
            })
        })
    },[url])

    if(joke.loading){
        content = <Loader></Loader>
    }
    if(joke.error){
        content=<p className="uppercase  text-red-500 font-bold text-center">
            There was an Error. Ensure you have internet and try again
        </p>
    }

    if(joke.data){
    content =
        <div className="bg-gray-100 items-center mb-6 rounded-md overflow-hidden">
             <h2 className="uppercase font-black border p-4 text-center">
                Category: {joke.data.categories[0]}
            </h2>
            <div className="bg-gray-400 p-3">
                <h1>
                    {joke.data.value} 
                </h1>

                <div className="font-bold p-3">
                    Time Created: {joke.data.created_at} 
                </div>
                <img src={joke.data.icon_url} alt="img" className="center"  />
            </div>
        </div>    
    }
     return(
         <div className='overflow-y-auto fixed bg-white top-0 right-0 w-3/5 sm:w-4/5 shadow h-full p-3'>
            <div className="mb-8 m-4 text-center uppercase text-blue-900 font-bold">
                <span className="text-xl p-4">
                    <FontAwesomeIcon
                        icon = {faVolleyballBall}
                    />
                </span>
                 It's Fun Time! Click on any Category in the Left to Get a Chuck-Norris Joke
            </div>
            {content}
         </div>
     )
 }
 export default Display