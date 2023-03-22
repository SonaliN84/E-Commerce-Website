import CartContext from './cart-context';
import {useState,useContext} from 'react';
import axios from "axios";
import AuthContext from './auth-context';

const CartContextProvider=(props)=>{
   const Authctx=useContext(AuthContext);
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
    console.log(item.email)
    let newEmail=item.email.replace(/[^a-zA-z0-9 ]/g,'')
    console.log(newEmail)
    axios.post(`https://crudcrud.com/api/39e9225bed014625a77bab63b2009dd4/cart${newEmail}`,item)
    .then((response)=>{
       
       console.log(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    
    axios(`https://crudcrud.com/api/39e9225bed014625a77bab63b2009dd4/cart${newEmail}`)
        .then((response)=>{
          console.log(response.data)
            Authctx.setData(response.data)
              
            })
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