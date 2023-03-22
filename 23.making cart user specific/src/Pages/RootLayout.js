import Header from "../Component/Header/Header";
import axios from "axios";
import { useState,useContext} from 'react';
import Cart from '../Component/Cart/Cart'
import CartContextProvider from '../Store/CartProvider';
import AuthContext from "../Store/auth-context";
const RootLayout =(props)=>{
    const [showModal, setShow] = useState(false);
    const Authctx=useContext(AuthContext)
    const handleClose = () => setShow(false);
   
    const handleShow = () => {
      setShow(true);
      const newEmail=Authctx.userEmail.replace(/[^a-zA-z0-9 ]/g,'');
  axios(`https://crudcrud.com/api/39e9225bed014625a77bab63b2009dd4/cart${newEmail}`)
      .then((response)=>{
        console.log(response.data)
          Authctx.setData(response.data)
            
          })
    }
    return (
     <CartContextProvider>
      {showModal && <Cart onRemoveModal={handleClose} show={showModal}/>}
     <Header onShowModal={handleShow}/>
       
      {props.children}

     </CartContextProvider>
 );
}
export default RootLayout;