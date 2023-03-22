import {Nav,Navbar,Button,Badge} from 'react-bootstrap';
import { Fragment,useContext} from 'react';
import HeaderName from './HeaderName';
import CartContext from '../../Store/cart-context';
import AuthContext from '../../Store/auth-context';
import { NavLink,Link } from 'react-router-dom';

const Header=(props)=>{

  const Authctx=useContext(AuthContext);
  const logoutHandler=()=>{
    Authctx.logout();
    
  }

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
        <NavLink to="/About"  style={{textDecoration:"none",marginRight:"5%"}}>About</NavLink>
        <NavLink to="/ContactUs"  style={{textDecoration:"none",}}>Contact Us</NavLink>
     </Nav>
     <Nav style={{marginRight:"5%"}} >
     <Button variant="primary"  onClick={props.onShowModal}>
      Cart<Badge bg="dark" className='ms-2' >  {NumberOfItemsInCart}</Badge></Button>{' '}  
      {!Authctx.isLoggedIn &&  (
        <Link to='/Auth'> <Button className='mx-2'>Login </Button></Link>
        )}
      {Authctx.isLoggedIn && (
           
           <Button onClick={logoutHandler} className="mx-2">Logout</Button>
          
          )}
    </Nav>
    </Navbar>
    <HeaderName/>
    </Fragment>
   );
}
export default Header;