import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Components/Product.jsx";
import Root from "./Components/Root.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/product",
        element: <Product />,
        loader: () => fetch("http://localhost:3000/data"),
      },
      {
        path: "/phone/:id",
        element: <SingleProduct></SingleProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/data/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
