const getFromDb = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const setToDb = id =>{
    const cart = getFromDb();
    if(id in cart){
        cart[id] = cart[id] + 1;
    }
    else{
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
const removeFromDb = id =>{
    const cart = getFromDb();
    delete cart[id];
    localStorage.setItem('cart',JSON.stringify(cart));
}
const clearDb = () =>{
    localStorage.removeItem('cart');
}

export {getFromDb, setToDb, removeFromDb, clearDb};