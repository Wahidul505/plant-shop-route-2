import React from 'react';
import {FaTrash} from 'react-icons/fa';

const OrderItem = ({plant, removeFromCart}) => {
    const {picture, name, price, quantity} = plant;
    return (
        <div className='flex gap-6'>
            <img className='h-36' src={picture} alt="" />
            <div>
            <p className='text-xl'>{name}</p>
            <p>Tk {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>removeFromCart(plant)} className='bg-lime-600 text-white p-2 rounded-lg mt-6'><FaTrash/></button>
            </div>
        </div>
    );
};

export default OrderItem;