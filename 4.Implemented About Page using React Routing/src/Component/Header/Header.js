import {Nav,Navbar,Button,Badge} from 'react-bootstrap';
import { Fragment,useContext} from 'react';
import HeaderName from './HeaderName';
import CartContext from '../../Store/cart-context';
import { NavLink } from 'react-router-dom';
const Header=(props)=>{
 const ctx=useContext(CartContext);

 const NumberOfItemsInCart=ctx.items.reduce((curNumber,item)=>{
    return curNumber+Number.parseInt(item.quantity);
 },0)

   return(
    <Fragment>
    <Navbar bg="dark" variant="dark" className='d-flex'>

      <Nav className="me-auto mx-6 flex-grow-1 fs-5">
        <NavLink to="/"  style={{textDecoration:"none",margin:"0 5%"}}>Home</NavLink>
        <NavLink to="/Store"  style={{textDecoration:"none",marginRight:"5%"}} >Store</NavLink>
        <NavLink to="/About"  style={{textDecoration:"none",}}>About</NavLink>
     </Nav>
     <Nav style={{marginRight:"5%"}} >
     <Button variant="primary"  onClick={props.onShowModal}>
      Cart<Badge bg="dark" className='ms-2' >  {NumberOfItemsInCart}</Badge></Button>{' '}  
    </Nav>
    </Navbar>
    <HeaderName/>
    </Fragment>
   );
}
export default Header;