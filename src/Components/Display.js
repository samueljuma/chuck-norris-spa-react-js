import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
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
        <div className="bg-gray-100 items-center mb-6 rounded-md overflow-hidden">
             <h2 className="uppercase font-black border p-4 text-center">
                Category: {joke.categories[0]}
            </h2>
            <div className="bg-gray-400 p-3">
                <h1>
                    {joke.value} 
                </h1>

                <div className="font-bold">
                    Time Createds: {joke.created_at} 
                </div>
                <img src={joke.icon_url} alt="img" className="center"  />
            </div>
        </div>
    }
     return(
         <div className='mt-20 fixed bg-white top-0 right-0 w-4/5 h-full shadow p-3'>
            <div className="m-4 text-center uppercase text-blue-900 font-bold">
                <span className="text-xl p-4">
                    <FontAwesomeIcon
                        icon = {faVolleyballBall}
                    />
                </span>
                 Its Fun Time. Click on any Category to Get Chuck-Norris Joke
            </div>
            {content}
         </div>
     )
 }
 export default Display