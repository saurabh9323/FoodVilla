import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./router/AppProvider";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppProvider} />
  </React.StrictMode>
);
