import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between py-4 px-6 text-xl'>
            <h1 className='text-lime-600 text-2xl font-semibold'>Plants Shop</h1>
            <div className='flex gap-6'>
                <Link to='/home'>Home</Link>
                <Link to='/plants'>Plants</Link>
                <Link to='/order-review'>OrderReview</Link>
                <Link to='/cart'>Cart</Link>
            </div>
        </nav>
    );
};

export default Header;