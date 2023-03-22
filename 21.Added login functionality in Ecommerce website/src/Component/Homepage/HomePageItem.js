import { Button } from "react-bootstrap";

const HomePageItem=(props)=>{
 return (
   <div className="d-flex justify-content-around my-2 border-bottom">
        <div style={{width:"20%"}}>{props.date}</div>
        <div style={{width:"30%"}}>{props.a}</div>
        <div style={{width:"30%"}}>{props.b}</div>
        <Button variant="primary" className="mb-2">Buy Tickets</Button>{' '}
    </div>
 );
}
export default HomePageItem;