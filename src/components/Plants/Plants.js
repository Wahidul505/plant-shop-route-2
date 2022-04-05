import React, { useState } from 'react';
import { setToDb } from '../../fakeDb/fakeDb';
import useCart from '../../hooks/useCart';
import usePlants from '../../hooks/usePlants';
import Plant from '../Plant/Plant';

const Plants = () => {
    const [plants] = usePlants();
    const [cart, setCart] = useCart(plants);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearchResults = e => {
        setSearchText(e.target.value);
        const results = plants.filter(plant => plant.name.toLowerCase().includes(searchText));
        setSearchResults(results);
    }
    const addToCart = plant => {
        const exists = cart.find(element => element.id === plant.id);
        let newCart;
        if(!exists){
            plant.quantity = 1;
            newCart = [...cart, plant];
        }
        else{
            const rest = cart.filter(element => element.id !== plant.id);
            plant.quantity = plant.quantity + 1;
            newCart = [...rest, plant];
        }
        setCart(newCart);
        setToDb(plant.id);
    }
    return (
        <div>
            <input onChange={handleSearchResults} className='border-2 border-lime-500 p-2 rounded-xl' type="text" placeholder='Enter Plants' />
            <div className='grid grid-cols-3 gap-6 p-12'>
                {
                    searchResults.map(plant => <Plant
                        key={plant.id}
                        plant={plant}
                        addToCart={addToCart}
                    />)
                }
            </div>
        </div>
    );
};

export default Plants;