import { useEffect, useState } from "react"
import { getFromDb } from "../fakeDb/fakeDb";

const useCart = plants =>{
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const storedCart = getFromDb();
        const savedCart = [];
        for(const id in storedCart){
            const storedPlant = plants.find(plant => plant.id=== id);
            if(storedPlant){
                storedPlant.quantity = storedCart[id];
                savedCart.push(storedPlant);
            }
        }
        setCart(savedCart);
    },[plants]);
    return [cart, setCart];
}
export default useCart;