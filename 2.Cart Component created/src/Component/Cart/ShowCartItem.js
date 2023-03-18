import './ShowItem.css';
import { Button } from 'react-bootstrap';
const ShowItem =(props)=>{
  return(

  <div className="d-flex flex-row border-bottom border-secondary-subtle rounded my-2 px-2 w">
   <div className="d-flex flex-column i ">
    <div className='fw-bold mb-2'>{props.title}</div>
    <div className="ShowItem"><img src={props.image}/></div>
    <div className='text-danger fw-bold mt-2'>Rs.{props.price}</div>
    
   </div>
   <div className='align-self-end my-1 i my-2'>
    <div className='border d-inline rounded p-1'>x{props.quantity}</div>
   </div>
   <Button className='align-self-start' variant="outline-secondary" size="sm"> X</Button>{" "}
   
  </div>

  );
}
export default ShowItem;