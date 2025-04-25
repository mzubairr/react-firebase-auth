import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { protectedRoutes, unProtectedRoutes } from "./routes/Approuter.jsx";

const isLoggedIn = false;
const routes = isLoggedIn ? protectedRoutes : unProtectedRoutes;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);