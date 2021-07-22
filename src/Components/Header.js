import React from 'react'
import CategoriesView from './CategoriesView'

function Header(){
    return(
        <header className='bg-gray-200 border-b p-5 flex justify-between items-center'>
            <CategoriesView/>
            <span className="font-bold">
                CHUCK NORRIS JOKES SPA
            </span>
            
        </header>
    )
}

export default Header
