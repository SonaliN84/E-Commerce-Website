import {Nav,Navbar,Button,Badge} from 'react-bootstrap';
import { Fragment,useContext} from 'react';
import HeaderName from './HeaderName';
import CartContext from '../../Store/cart-context';

const Header=(props)=>{
 const ctx=useContext(CartContext);

 const NumberOfItemsInCart=ctx.items.reduce((curNumber,item)=>{
    return curNumber+Number.parseInt(item.quantity);
 },0)

   return(
    <Fragment>
    <Navbar bg="dark" variant="dark" className='d-flex'>

      <Nav className="me-auto mx-6 flex-grow-1 fs-5">
        <Nav.Link href="#home" className='mx-4'>Home</Nav.Link>
        <Nav.Link href="#features" >Store</Nav.Link>
        <Nav.Link href="#pricing" className='mx-4'>About</Nav.Link>
     </Nav>
     <Nav >
     <Button variant="primary" className='mx-5 fs-5 py-1' onClick={props.onShowModal}>
      Cart<Badge bg="dark" className='ms-2'>{NumberOfItemsInCart}</Badge></Button>{' '}  
    </Nav>
    </Navbar>
    <HeaderName/>
    </Fragment>
   );
}
export default Header;