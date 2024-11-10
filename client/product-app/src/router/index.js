import { createBrowserRouter } from "react-router-dom";
import ContactList from "../components/contactList/ContactList";
import ContactPost from "../components/contactPost/ContactPost";
import Layout from "../components/layout/Layout";
import ProductList from "../components/producList/ProductList";
import Product from "../components/productsPost/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/contact-forum",
        element: <ContactPost />,
      },
      {
        path: "contact-list",
        element: <ContactList />,
      },
    ],
  },
]);
