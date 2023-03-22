import { Card,Button } from "react-bootstrap";
import CartContext from '../../Store/cart-context';
import AuthContext from "../../Store/auth-context";
import {useContext} from 'react';
import { Link } from "react-router-dom";

const ShowItem=(props)=>{

   const ctx=useContext(CartContext);

   const authCtx=useContext(AuthContext)
   const addItemInCartHandler=()=>{
    console.log(authCtx.userEmail)
    ctx.addItem(
        {
            title:props.title,
            image:props.image,
            price:props.price,
            quantity:1,
            email:authCtx.userEmail
        })
        
    
    
   }



 return (
 
 <Card border="white" style={{ width: '20rem' }} className='mx-5'>
 <Card.Body>
   <Card.Title className="text-center">{props.title}</Card.Title>
  <Card.Img variant="top" src={props.image}/>
   <Card.Text className="d-flex justify-content-between mt-4">
    Rs. {props.price}
   <Button variant="primary" onClick={addItemInCartHandler}>Add to Cart</Button>
   <Link to={`/Store/${props.title}`}><Button variant="primary">see Details</Button></Link>
   
   </Card.Text>
 </Card.Body>
</Card>)
}
export default ShowItem;