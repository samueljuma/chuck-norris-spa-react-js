import React from 'react'
import { Link } from 'react-router-dom'

function CategoriesView(){

    const categories = ["animal", "career", "celebrity", "dev", "fashion", "science", "political","religion"
                            ,"music", "sport","explicit","food","history","money","movie",];

    return(
        <div className="overflow-hidden overflow-y-auto mt-20 fixed bg-white top-0 left-0 w-2/5 h-4/5 sm:w-1/5 shadow p-5">
            <div className='font-bold py-3 text-center'>
            Fact Categories
        </div>
        <ul>
            <li>
                <Link 
                    to={`/jokes=${categories[0]} `}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t block">Animal
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[1]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Career
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[2]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Celebrity
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[3]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Dev 
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[4]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Fashion 
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[5]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Science
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[6]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Political
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[7]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Religion
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[8]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Music
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[9]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Sports
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[10]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Explicit
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[11]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Food
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[12]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">History
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[13]}`}
                    className="hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Money
                </Link>
            </li>
            <li>
                <Link 
                    to={`/jokes=${categories[14]}`}
                    className="mb-8 hover:text-black text-white text-center rounded bg-blue-900 py-2 border-t-2 block">Movie
                </Link>
            </li>
        </ul>
        </div>
    )
}
export default CategoriesView