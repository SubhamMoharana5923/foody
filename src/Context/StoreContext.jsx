// src/Context/StoreContext.js

import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (id) => {
        setCartItems(prev => {
            const newCart = { ...prev, [id]: (prev[id] || 0) + 1 };
            console.log(`Product ID: ${id}, Quantity: ${newCart[id]}`);
            return newCart;
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => {
            const updatedCart = { ...prev };
            if (updatedCart[id] > 1) {
                updatedCart[id] -= 1;
            } else {
                delete updatedCart[id];
            }
            console.log(`Product ID: ${id}, Quantity: ${updatedCart[id] || 0}`);
            return updatedCart;
        });
    };

const gettotalcartamount=()=>{
  let   total_amount=0;
  for(const item in cartItems)
  {
    if(cartItems[item]>0)
    {
        let iteminfo=food_list.find((product)=>
            product._id===item
        );
        total_amount+=iteminfo.price*cartItems[item];
    }
  
  }
  return total_amount;



}

    const ContextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,gettotalcartamount
    };

    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
