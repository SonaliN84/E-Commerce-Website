import { Fragment,useState } from 'react';
import AvailableItems from './Component/AvailableItems/AvailableItems';
import Header from './Component/Header/Header';
import Cart from './Component/Cart/Cart'
function App() {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
    {showModal && <Cart onRemoveModal={handleClose} show={showModal}/>}
   <Header onShowModal={handleShow}/>
   <AvailableItems/>
   </Fragment>
  );
}

export default App;
