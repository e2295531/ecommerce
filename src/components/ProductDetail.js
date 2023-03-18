import React from "react";
import { Modal, Button } from "react-bootstrap";

function ProductDetail(props) {
  const { product, handleClose } = props;

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header >
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Description : {product.description}</p>
        <p>Prix : {product.price} euros</p>
        <p>Catégorie : {product.category}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetail;
