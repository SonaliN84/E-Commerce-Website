import CartContext from './cart-context';
import {useState} from 'react';

const CartContextProvider=(props)=>{

    const [items,setItems]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0)
   const addItemToCartHandler=(item)=>{
   let flag=true;
   items.forEach((i,index)=>{
    if(i.title===item.title)
    {
        flag=false;
        items[index].quantity+=1;
    }
    setItems((prev)=>{
        return [...prev]
     })

   })

     if(flag){
      setItems((prev)=>{
        return [...prev,item]
      })
    }
  
}
  const cartContext={
    items:items,
    addItem:addItemToCartHandler,
    totalAmount:totalAmount,
    setTotalAmount:setTotalAmount

  }
  
    return(
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  );
}
export default CartContextProvider;