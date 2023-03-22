import ShowCartItem from "./ShowCartItem";
import CartContext from '../../Store/cart-context';
import {useContext} from 'react';
const CartItems = () => {
 
    const ctx=useContext(CartContext);

  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
    {
        title: "Black and white Colors",
  
        price: 50,
  
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  
        quantity: 3,
      },
  
      {
        title: "Yellow and Black Colors",
  
        price: 70,
  
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  
        quantity: 1,
      },
  ];

  return(

  <div className="d-flex flex-column w-100">
    {
        ctx.items.map((item)=>(
            <ShowCartItem title={item.title} price={item.price} image={item.image} quantity={item.quantity}/>
        )) 
    }
  </div>
   
  );
};
export default CartItems;
