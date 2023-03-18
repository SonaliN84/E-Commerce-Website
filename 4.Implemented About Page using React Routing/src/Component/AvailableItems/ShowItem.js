import { Card,Button } from "react-bootstrap";
import CartContext from '../../Store/cart-context';
import {useContext} from 'react';
const ShowItem=(props)=>{

   const ctx=useContext(CartContext);

   const addItemInCartHandler=()=>{
    ctx.addItem(
        {
            title:props.title,
            image:props.image,
            price:props.price,
            quantity:1

        }
    )
   }



 return (
 
 <Card border="white" style={{ width: '18rem' }} className='mx-5'>
 <Card.Body>
   <Card.Title className="text-center">{props.title}</Card.Title>
  <Card.Img variant="top" src={props.image}/>
   <Card.Text className="d-flex justify-content-between mt-4">
    Rs. {props.price}
   <Button variant="primary" onClick={addItemInCartHandler}>Add to Cart</Button>
   </Card.Text>
 </Card.Body>
</Card>)
}
export default ShowItem;