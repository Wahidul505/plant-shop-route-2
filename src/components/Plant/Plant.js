import React from 'react';
import {FiShoppingBag} from 'react-icons/fi'

const Plant = ({plant, addToCart}) => {
    const {picture, name, price} = plant;
    return (
        <div className='shadow-xl shadow-gray-400 rounded-lg relative h-96'>
            <img className='w-full h-64 rounded-t-lg mb-2' src={picture} alt="" />
            <h1 className='text-xl text-teal-600'>{name}</h1>
            <p className='text-gray-500'>Tk {price}</p>
            <button onClick={()=>addToCart(plant)} className='w-full absolute bottom-0 bg-lime-600 text-white p-2 right-0 left-0 flex justify-center text-xl'><FiShoppingBag/></button>
        </div>
    );
};

export default Plant;