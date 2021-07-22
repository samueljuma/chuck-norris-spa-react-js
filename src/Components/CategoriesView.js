import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CategoriesView(props){

    const categories = ["animal", "career", "celebrity", "dev", "fashion", "science", "political","religion"
                            ,"music", "sports"];

    const  [category, setCategory] = useState(
        {
            category: null
        }
    )

    return(
        <div className="overflow-hidden overflow-y-auto mt-20 fixed bg-white top-0 h-full left-0 w-1/5 shadow p-3">
            <div className='font-bold py-3 text-center'>
            Categories
        </div>
        <ul>
             {/* //bg-blue-500 text-white p-2 flex justify-center */}
            <li>
                <Link 
                    to={`/jokes=${categories[0]} `}
                    className=" text-center rounded bg-blue-500 py-2 border-t block">Animal Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[1]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Career Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[2]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Celebrity Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[3]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Dev Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[4]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Fashion Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[5]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Science Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[6]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Political Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[7]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Religion Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[8]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Music Facts
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[9]}`}
                    className="text-center rounded bg-blue-500 py-2 border-t-2 block">Sports Facts
                </Link>
            </li>
        </ul>
        </div>
    )
}
export default CategoriesView