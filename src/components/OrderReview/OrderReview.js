import React from 'react';
import { removeFromDb } from '../../fakeDb/fakeDb';
import useCart from '../../hooks/useCart';
import usePlants from '../../hooks/usePlants';
import OrderItem from '../OrderItem/OrderItem';

const OrderReview = () => {
    const [plants] = usePlants();
    const [cart, setCart] = useCart(plants);
    const removeFromCart = plant =>{
        const rest = cart.filter(element => element.id !== plant.id);
        setCart(rest);
        removeFromDb(plant.id);
    }
    return (
        <div className='flex flex-col gap-6'>
            {
                cart.map(plant => <OrderItem
                    key={plant.id}
                    plant={plant}
                    removeFromCart={removeFromCart}
                />)
            }
        </div>
    );
};

export default OrderReview;