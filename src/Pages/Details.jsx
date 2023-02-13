import React from "react";
import { useParams } from "react-router-dom";
import products from "../Data/product.json";
import reactSvgImageURL from "../assets/react.svg";

const Details = () => {
  const { lyuboy } = useParams();

  let product = products.find((p) => p.id + "" === lyuboy);

  return (
    <div>
      <img src={reactSvgImageURL} alt="" />
      <h1>{product.name}</h1>
      <h3>{product.author}</h3>
      <p>{product.price} so'm</p>
    </div>
  );
};

export default Details;
