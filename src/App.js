import React from "react";
import "./App.css";
import Header from "./layout/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./container/productsPage";
import { Container } from "react-bootstrap";
import ProductDetail from "./container/ProductDetail.js";
import UpdateProduct from "./container/updateProduct/UpdateProduct";

const App = () => {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/product/:id" element={<ProductDetail/>}/>
          <Route  exact path="/product/update/:id" element={<UpdateProduct/>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
