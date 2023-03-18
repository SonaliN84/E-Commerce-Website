import { Card,Button } from "react-bootstrap";

const ShowItem=(props)=>{
 return (
 
 <Card border="white" style={{ width: '18rem' }} className='mx-5'>
 <Card.Body>
   <Card.Title className="text-center">{props.title}</Card.Title>
  <Card.Img variant="top" src={props.image}/>
   <Card.Text className="d-flex justify-content-between mt-4">
    Rs. {props.price}
   <Button variant="primary">Add to Cart</Button>
   </Card.Text>
 </Card.Body>
</Card>)
}
export default ShowItem;