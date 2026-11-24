
import React from "react";
import "./App.css";
import products from "./products.json";

function App() {
  return (
    <div className="container">
      <h1>E-Commerce Product Catalog</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p>Price: ₹{product.price}</p>

            <button onClick={() => alert(product.name + " added to cart!")}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
