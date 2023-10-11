import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const separateProduct = useLoaderData();
  const { category, picture, price } = separateProduct;
  console.log(separateProduct);
  return (
    <div>
      <h1>{category}</h1>
      <img src={picture} alt="" />
      <p>{price}</p>
    </div>
  );
};

export default SingleProduct;
