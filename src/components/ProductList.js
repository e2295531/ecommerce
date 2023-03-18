import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from "./ProductDetail";

function ProductList() {
  const [products, setProducts] = useState([]);

    const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" })
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((err) => console.log(err));
  };
 const handleShowDetail = (product) => {
   setSelectedProduct(product);
    };
    const handleCloseDetail = () => {
      setSelectedProduct(null);
    };
  return (
    <div className="container">
      <h2>Liste des produits</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>

              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-info mr-2">
                  Modifier
                </Link>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleShowDetail(product)}
                  data-toggle="modal"
                  data-target="#productDetailModal"
                >
                  Détails
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          handleClose={handleCloseDetail}
        />
      )}
      <Link to="/add" className="btn btn-info mr-2">
        Ajouter un produit
      </Link>
    </div>
  );
}

export default ProductList;