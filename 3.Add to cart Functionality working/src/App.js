import { Fragment,useState } from 'react';
import AvailableItems from './Component/AvailableItems/AvailableItems';
import Header from './Component/Header/Header';
import Cart from './Component/Cart/Cart'
import CartContextProvider from './Store/CartProvider';
function App() {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <CartContextProvider>
    {showModal && <Cart onRemoveModal={handleClose} show={showModal}/>}
   <Header onShowModal={handleShow}/>
   <AvailableItems/>
   </CartContextProvider>
  );
}

export default App;
