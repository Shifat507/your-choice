import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";
// import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ()=> fetch('https://admin.refabry.com/api/all/product/get')
            },
        ]
    },
]);