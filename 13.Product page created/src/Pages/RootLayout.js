import Header from "../Component/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import Cart from '../Component/Cart/Cart'
import CartContextProvider from '../Store/CartProvider';

const RootLayout =()=>{
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
     <CartContextProvider>
      {showModal && <Cart onRemoveModal={handleClose} show={showModal}/>}
     <Header onShowModal={handleShow}/>
       
       <Outlet/>

     </CartContextProvider>
 );
}
export default RootLayout;