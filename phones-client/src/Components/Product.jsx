import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Product = () => {
  const products = useLoaderData();
  const allProduct = products.items;
  return (
    <div>
      <h1>Product pag:{allProduct.length}</h1>
      {allProduct.map((singleProduct) => (
        <li>
          <Link to={`/phone/${singleProduct.id}`}>{singleProduct.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Product;
