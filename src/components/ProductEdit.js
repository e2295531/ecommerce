import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { id } = useParams();
  

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
          <h2>Modifier le produit</h2>
          {showSuccessMessage && (
        <div className="alert alert-success mt-3">
          Le produit a été modifié avec succès !
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Prix:</label>
          <input
            className="form-control"
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Catégorie:</label>
          <input
            className="form-control"
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Modifier
        </button>
      </form>
      
    </div>
  );
}

export default ProductEdit;
