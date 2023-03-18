import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";

function App() {
  return (
    
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Accueil />} />
          </Routes>
          <Routes>
            <Route exact path="/produits" element={<ProductList />} />
          </Routes>
          <Routes>
            <Route path="/add" element={<ProductAdd />} />
          </Routes>
          <Routes>
            <Route path="/edit/:id" element={<ProductEdit />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
