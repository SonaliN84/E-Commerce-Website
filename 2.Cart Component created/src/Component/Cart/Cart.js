import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CloseButton } from "react-bootstrap";
import CartItems from "./CartItems";
import './Cart.css'
const Cart = (props) => {
 
  return (
    
    <Modal 
     show={props.show}
      onHide={props.onRemoveModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-white bg-black text-white p-4">
        <Modal.Title>CART</Modal.Title>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={props.onRemoveModal}
        
        >
          X
        </Button>{" "}
      </Modal.Header>
      <Modal.Body><CartItems/></Modal.Body>
      <Modal.Footer className="border-white">
        <Button variant="primary" onClick={props.onRemoveModal}>
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
    
  );
};
export default Cart;
