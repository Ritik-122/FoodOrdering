import React, { useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider(props) {
  const [items, updateItems] = useState([]);

  const addItem = (item) => {
    let temp=[...items]
    let indxOfItem=temp.findIndex((i)=>i.id===item.id)
    if(indxOfItem===-1)
    {
      temp=[...temp,item]
      
    }else{
      temp[indxOfItem].quantity=Number(temp[indxOfItem].quantity)+1
    }
    updateItems([...temp])
    
    
  };
  const removeItemFromCartHandler = (id) => {
    let temp = [...items];
    let itemidx = temp.findIndex((i) => i.id === id);
    if(temp[itemidx].quantity>1){

    temp[itemidx].quantity = Number(temp[itemidx].quantity) - 1;
    }
    else{
      temp=temp.filter((i) => i.id !== id);
      
    }
    updateItems([...temp]);
    
  };
  const cartContext = {
    items: items,
    addItem: addItem,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
