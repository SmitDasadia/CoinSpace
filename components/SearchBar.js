import React from 'react'

const SearchBar = ({ ...rest }) => {
    return (
        <div className="px-4 flex justify-center items-center mx-auto text-white py-5">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    
                    className="py-3 pl-12 pr-4 border rounded-md outline-none bg-[#0020aa] focus:border-indigo-600 text-white placeholder:text-white w-96"
                    {...rest}
                />
            </div>
        </div>
    )
}

export default SearchBar