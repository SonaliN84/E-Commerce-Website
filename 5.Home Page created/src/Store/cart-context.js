import React from 'react';

const CartContext =React.createContext({
    items:[],
    addItem:(item)=>{},
    totalAmount:0,
    setTotalAmount:()=>{}

})
export default CartContext;