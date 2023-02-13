import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import products from "../Data/product.json";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setLoading(false);

    setProducts(data);
  }

  function handleRefetch() {
    setRefetch(!refetch);
  }

  useEffect(() => {
    getProducts();
  }, [refetch]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <button onClick={handleRefetch}>refetch</button>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.price} so'm</p>
            <Link to={`/product-details/${p.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
