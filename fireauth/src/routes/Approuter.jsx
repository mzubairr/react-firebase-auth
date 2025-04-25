import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";

export const unProtectedRoutes = createBrowserRouter([
    {
        path: "",
        element: <Layout />,

        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "*",
                element: <Home />,
            }
        ],
    },
]);

export const protectedRoutes = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: "product",
                element: <Product />,
            },
        ],
    },
]);