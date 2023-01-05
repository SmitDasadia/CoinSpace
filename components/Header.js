/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
    return (
        <div>

            <header className="body-fon">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 h-2">
                       <img src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png" alt="" className='h-10 w-30'/>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                       
                    </nav>
                    <button className="inline-flex items-center bg-[#0323ff] border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 text-white">Login
                       
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header