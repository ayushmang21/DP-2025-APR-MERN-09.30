import React from 'react'

const Card = ({ title, description }) => {
    return (
        <div className='bg-green-800 p-6 rounded-lg shadow-lg text-white hover:bg-green-700 transition duration-300'>
            <h1 className='font-bold text-3xl'> {title} </h1>
            <p className='text-xl'>{description}</p>
        </div>
    )
}

export default Card;